(ns app.accounts.db
  (:refer-clojure :exclude [find])
  (:require 
   [com.stuartsierra.component :as component]
   [buddy.hashers :as hs]
   [app.accounts.organizations :as o]
   [yesql.core :refer [defqueries]]))

(defqueries "sql/accounts.sql")

(defn format-user [rows]
  (let [first-row (first rows)
        u (dissoc first-row :role)
        roles (vec (map :role rows))]
    (assoc u :roles roles)))

(defprotocol Accounts 
  (get-all [this] "all accounts")
  (auth [this username password] "authenticate user")
  (find [this username] "find user by username"))

(defrecord PgAccounts []
  ;; Implement the Lifecycle protocol
  component/Lifecycle

  (start [component]
    (println ";; Starting Accounts")
    ;; In the 'start' method, initialize this component
    ;; and start it running. For example, connect to a
    ;; database, create thread pools, or initialize shared
    ;; state.
    component)

  (stop [component]
    (println ";; Stopping Accounts")
    ;; Return the component, optionally modified. Remember that if you
    ;; dissoc one of a record's base fields, you get a plain map.
    component)

  Accounts
  (get-all [this]
    (sql-all-organizations {}  this))
  (find [this username]
    (->
     (find-user-by-username {:username username} this)
     format-user))
  (auth [this username password]
    (let [user (find this username)
          unauthed [false "Invalid username or password"]]
      (if user
        (if (hs/check password (:password user))
          [true {:user (dissoc user :password)}]
          unauthed)
        unauthed))))

(defn new-accounts-db [connection]
  (map->PgAccounts {:connection connection}))
