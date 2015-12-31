(ns app.server.system
  (:require [clojure.java.io :as io]
            [com.stuartsierra.component :as component]
            [duct.component.endpoint :refer [endpoint-component]]
            [duct.component.handler :refer [handler-component]]
            [duct.middleware.not-found :refer [wrap-not-found]]
            [duct.middleware.route-aliases :refer [wrap-route-aliases]]
            [meta-merge.core :refer [meta-merge]]
            [ring.component.jetty :refer [jetty-server]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.webjars :refer [wrap-webjars]]
            [app.endpoints.example :refer [example-endpoint]]
            [app.endpoints.login :refer [login-endpoint]]
            [app.endpoints.leaderboard :refer [leaderboard-endpoint]]
            [app.server.http :refer [new-http]]
            [app.server.migrate :refer [new-ragtime]]
            [clojure.pprint :refer [pprint]]
            [app.accounts.organizations :refer [new-accounts]]))

(def base-config
  {:app {:middleware [[wrap-not-found :not-found]
                      [wrap-webjars]
                      [wrap-defaults :defaults]
                      [wrap-route-aliases :aliases]]
         :not-found  (io/resource "app/errors/404.html")
         :defaults   (meta-merge site-defaults {:static {:resources "app/public"}
                                                :security {:anti-forgery false}})
         :aliases    {"/" "/index.html"}}})

(defn new-system [cfg]
  (let [config (meta-merge base-config cfg)
        {:keys [connection database]} config]
    (-> (component/system-map
         :app  (handler-component (:app config))
         :ragtime (new-ragtime {:database database})
;        :http (jetty-server (:http config))
         :http (new-http (:http config))
         :example (endpoint-component example-endpoint)
         :login (endpoint-component login-endpoint)
         :leaderboard (endpoint-component leaderboard-endpoint)
         :accounts (new-accounts connection))
        (component/system-using
         {:http [:app]
          :app  [:example :login :leaderboard]
          :accounts []
          :example [:accounts]}))))