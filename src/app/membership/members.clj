(ns app.membership.members
  (:require
   [aggregate.core :as agg]
   [yesql.core :refer [defqueries]]))

(defqueries "sql/membership.sql")

(defn members [db organization-id]
  (sql-memberships-by-organization {:organization_id organization-id} {:connection db}))
