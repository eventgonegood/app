(ns app.events.db
  (:require 
   [com.stuartsierra.component :as component]
   [aggregate.core :as agg]
   [yesql.core :refer [defqueries]]))


(defqueries "sql/events.sql")

(defprotocol Events
  (record-event [this event]))

(defrecord PgEvents [db-spec]
  component/Lifecycle
  (start [component]
    (println ";; Starting Events")
    component)
  (stop [component]
    (println ";; Stopping Evnts")
    component)

  Events
  (record-event [this event]
    (sql-insert-event! {:payload event} {:connection db-spec})  
    )
  )

(defn new-event [db-spec]
  (map->PgEvents db-spec)
  )
