(ns app.accounts.organizations
  (:require
   [aggregate.core :as agg]
   [app.accounts.schemas :as s]
   [yesql.core :refer [defqueries]]))

(def accounts-er (agg/make-er-config
                    (agg/entity :accounts.profiles) ;links orgs to identities
                    (agg/entity :accounts.roles)
                    (agg/entity :accounts.organizations
                                (agg/->mn :members  :accounts.profiles {:query-fn (agg/make-query-<many>-fn
                                                                                :accounts.profiles
                                                                                :accounts.memberships
                                                                                :organization_id
                                                                                :identity_id)}))

                     (agg/entity :accounts.memberships
                       (agg/->1 :role :accounts.roles {:owned? false})
                       (agg/->1 :organization :accounts.organizations {:owned? false}))
                  ))

(defn load-membership [db id]
  (agg/load accounts-er db :accounts.memberships id))

(defn load-organization [db id]
  (agg/load accounts-er db :accounts.organizations id))

(defn load-role [db id]
  (agg/load accounts-er db :accounts.roles id))

(defn load-profile [db id]
  (agg/load accounts-er db :accounts.profiles id))

#_(defqueries "sql/accounts.sql")

