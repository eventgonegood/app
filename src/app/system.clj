(ns app.system
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
            [app.endpoint.example :refer [example-endpoint]]
            [app.endpoint.login :refer [login-endpoint]]
            [clojure.pprint :refer [pprint]]
            [app.accounts :refer [new-accounts]]))

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
        {:keys [connection]} config]
    (-> (component/system-map
         :app  (handler-component (:app config))
         :http (jetty-server (:http config))
         :example (endpoint-component example-endpoint)
         :login (endpoint-component login-endpoint)
         :accounts (new-accounts connection))
        (component/system-using
         {:http [:app]
          :app  [:example :login]
          :accounts []
          :example [:accounts]}))))
