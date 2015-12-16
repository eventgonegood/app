(ns app.accounts
  (:refer-clojure :exclude [find])
  (:require 
   [com.stuartsierra.component :as component]
   [yesql.core :refer [defqueries]]
   [clojure.pprint :refer [pprint]]))

(defqueries "sql/accounts.sql")

(defprotocol Accounts 
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
  (find [this username]
    (->
     (find-user-roles {:username username} this)
     first)))

(defn new-accounts [connection]
  (map->PgAccounts {:connection connection}))
