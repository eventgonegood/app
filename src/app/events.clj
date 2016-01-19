(ns app.events
  (:require 
   [com.stuartsierra.component :as component]
   [aggregate.core :as agg]
   [cheshire.core :refer [generate-string]]
   [yesql.core :refer [defqueries]]))

(defqueries "sql/events.sql")

(defn record [db event]
  (sql-insert-event! {:payload (generate-string event)} {:connection db}))

(defn log [type content actions]
  {:type type
   :content content
   :actions actions})

(defn needs-to-pay-log [id name amount]
  (log :financial (str name " owes " amount) ["Send Email"]))


(defn record-login [db identity]
  (record db {:identity identity}))
