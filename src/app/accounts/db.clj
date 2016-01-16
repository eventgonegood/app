(ns app.accounts.db
  (:require 
   [com.stuartsierra.component :as component]
   [buddy.hashers :as hs]
   [aggregate.core :as agg]
   [app.accounts.organizations :as o]
   [yesql.core :refer [defqueries]]))

#_(def accounts-er (agg/make-er-config
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

#_(defqueries "sql/accounts.sql")

