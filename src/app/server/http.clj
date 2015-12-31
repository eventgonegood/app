(ns app.server.http
  (:require 
   [org.httpkit.server :as server]
   [com.stuartsierra.component :as component]))

(defrecord HttpServer  [port server app]
  component/Lifecycle 

  (start  [component]
    (println ";; Starting Http" port)
    ;; In the 'start' method, initialize this component
    ;; and start it running. For example, connect to a
    ;; database, create thread pools, or initialize shared
    ;; state.
    (let  [h  (:handler app)
           s  (server/run-server h  {:port port})]
      (assoc component :server s)))

  (stop  [component]
    (println ";; Stopping Http")
    ;; Return the component, optionally modified. Remember that if you
    ;; dissoc one of a record's base fields, you get a plain map.
    (let  [s  (:server component)]
      (if s  (s :timeout 100))
      (assoc component :server nil)))) 

(defn new-http  [http-config]
  (map->HttpServer http-config))
