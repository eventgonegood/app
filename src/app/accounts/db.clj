(ns app.accounts.db
  (:require 
   [com.stuartsierra.component :as component]
   [buddy.hashers :as hs]
   [aggregate.core :as agg]
   [app.accounts.organizations :as o]
   [yesql.core :refer [defqueries]]))

(hs/encrypt "password")

(def accounts-er (agg/make-er-config
                  (agg/entity :accounts.organizations
                              (agg/->mn :members  :accounts.users {:query-fn (agg/make-query-<many>-fn
                                                                              :accounts.users
                                                                              :accounts.memberships
                                                                              :organization_id
                                                                              :user_id)}))
                  (agg/entity :accounts.roles)
                  (agg/entity :accounts.users
                              (agg/->mn :roles :accounts.roles {:query-fn (agg/make-query-<many>-fn
                                                                           :accounts.roles
                                                                           :accounts.memberships
                                                                           :user_id
                                                                           :role_id)}))))

(def quick-conn {:connection-uri "jdbc:postgresql://localhost:5432/egg?user=egg"})
(agg/load accounts-er quick-conn :accounts.roles 1)
(agg/load accounts-er quick-conn :accounts.users 1)

(defqueries "sql/accounts.sql")

(defn format-user [rows]
  (let [first-row (first rows)
        u (dissoc first-row :role)
        roles (vec (map :role rows))]
    (assoc u :roles roles)))

(defn format-organization [rows]
  (loop [o [], remaining rows]
    (if (empty? remaining) 
      o
      (let [current-row (first remaining)
            org {:id (:organization_id current-row)
                 :name (:organization_name current-row)}
            orgs (conj o org)]
        (recur orgs (rest rows))))))

(defprotocol Accounts 
  (load-organization [this id] "retreive organization by id")
  (load-user [this id] "retrieve user by id")
  (find-user [this username] "find user by username")
  (load-role [this id] "retrieve role by id")
  (load-all-organizations [this])
  (load-all-users [this])
  (load-all-roles [this])
  (auth [this username password] "authenticate user"))

(defrecord PgAccounts [db-spec]
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
  (load-organization [this id]
    (agg/load accounts-er db-spec :accounts.organizations id))
  (load-user [this id] 
    (agg/load accounts-er db-spec  :accounts.users id))
  (find-user [this username]
    (->
     (find-user-by-username {:username username} {:connection db-spec})
     format-user))
  (load-role [this id] 
    (agg/load accounts-er db-spec :accounts.roles id))
  (load-all-organizations [this]
    (sql-all-organizations {} {:connection db-spec}))
  (load-all-users [this] 
    (sql-all-users {} {:connection db-spec}))
  (load-all-roles [this] [{}])
  (auth [this username password]
    (let [user (find-user this username)
          unauthed [false "Invalid username or password"]]
      (if user
        (if (hs/check password (:password user))
          [true {:user (dissoc user :password)}]
          unauthed)
        unauthed))))

(defn new-accounts-db [connection]
  (map->PgAccounts {:db-spec connection}))
