(ns app.migrate
  (:require  [ragtime.jdbc :as jdbc]
             [app.config :as config]
             [ragtime.core :as core]
             [ragtime.strategy :as strategy]
             [com.stuartsierra.component :as component]
             [ragtime.repl :as repl]))

(defn reload
  "Reload the migrations of a Ragtime component and return a new component."
  [{:keys  [resource-path] :as component}]
  (assoc component :migrations  (jdbc/load-resources resource-path)))

(defrecord Ragtime [resource-path]
  component/Lifecycle
  (start [component]
    (->
     component
     (assoc :datastore (-> component :database jdbc/sql-database))
     (reload)))
  (stop [component]
    (dissoc component :datastore :migrations)))

(def default-options
  {:strategy strategy/raise-error
   :reporter repl/default-reporter
   :resource-path "migrations"})

(defn new-ragtime 
  "Create a Ragtime component for handling migrations. Expects a dependency
    :database that has a key :spec containing a clojure.java.jdbc compatible
    db-spec map.
    Takes the following options:
    :resource-path - the resource path to find migration files
    :strategy      - the Ragtime strategy
                     (defaults to ragtime.strategy/raise-error)
    :reporter      - the reporter function
                     (defaults to ragtime.repl/default-reporter)"
  [options]
  (map->Ragtime (merge default-options options)))

(defn load-config  []
  {:datastore  (jdbc/sql-database  {:connection-uri "jdbc:postgresql://localhost:5432/egg?user=egg"})})

;(migrate ragtime-component)
(defn migrate
  "Migrates the dependent database to the latest migration."
  [{:keys  [datastore migrations strategy reporter]}]
  (let  [migrations  (map #(repl/wrap-reporting % reporter) migrations)]
    (core/migrate-all datastore  {} migrations strategy)))
