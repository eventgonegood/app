(ns app.migrate
  (:require  [ragtime.jdbc :as jdbc]
             [app.config :as config]
             [ragtime.repl :as repl]))

(defn load-config  []
  {:datastore  (jdbc/sql-database  {:connection-uri "jdbc:postgresql://localhost:5432/egg?user=egg"})})

(defn migrate []
  (let [cfg config/defaults]
       ;needs to have a [:datastore :connection-uri] key
    (repl/migrate cfg)))

(defn rollback []
  (let [cfg config/defaults]
       ;needs to have a :connection-uri key
    (repl/rollback cfg)))
