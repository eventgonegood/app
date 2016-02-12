(ns app.server.system
  (:require [clojure.java.io :as io]
            [com.stuartsierra.component :as component]
            [duct.component.endpoint :refer [endpoint-component]]
            [duct.component.handler :refer [handler-component]]
            [duct.middleware.not-found :refer [wrap-not-found]]
            [duct.middleware.route-aliases :refer [wrap-route-aliases]]
            [meta-merge.core :refer [meta-merge]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.util.response :refer [redirect]]
            [buddy.auth.middleware :refer [wrap-authentication]]
            [buddy.auth.accessrules :refer [wrap-access-rules]]
            [app.security.middleware :refer [egg-backend egg-access-rules]]
            [app.security.endpoint :refer [login-endpoint logout-endpoint]]
            [app.accounts.endpoint :refer [accounts-endpoint signup-endpoint]]
            [app.membership.endpoint :refer [membership-endpoint]]
            [app.scheduling.endpoint :refer [scheduling-endpoint]]
            [app.staff.endpoint :refer [staff-endpoint]]
            [app.server.http :refer [new-http]]
            [app.server.migrate :refer [new-ragtime]]
            [clojure.pprint :refer [pprint]]))

(def base-config
  ;apparently this are applied in reverse order?
  {:app {:middleware [[wrap-not-found :not-found]
                      ;[wrap-route-aliases :aliases]
                      [wrap-access-rules :access-rules]
                      [wrap-authentication :auth-backend]
                      [wrap-defaults :defaults]]
         :not-found  (io/resource "app/errors/404.html")
         :access-rules egg-access-rules
         :auth-backend egg-backend
         :defaults   (meta-merge site-defaults {:static {:resources "app/public"}
                                                :security {:anti-forgery false}})
         ;:aliases    {"/" "/index.html"}
}})

(defn new-system [cfg]
  (let [config (meta-merge base-config cfg)
        {:keys [database]} config]
    (-> (component/system-map
         :app  (handler-component (:app config))
         :ragtime (new-ragtime {:database database})
         :http (new-http (:http config))

         ;; database / repositories
         :database database

         ;; endpoints
         :login-ep (endpoint-component login-endpoint)
         :membership-ep (endpoint-component membership-endpoint)
         :logout-ep (endpoint-component logout-endpoint)
         :accounts-ep (endpoint-component accounts-endpoint)
         :signup-ep (endpoint-component signup-endpoint)
         :staff-ep (endpoint-component staff-endpoint)
         :scheduling-ep (endpoint-component scheduling-endpoint))
        (component/system-using
         {:http [:app]
          :app  [:login-ep :logout-ep :accounts-ep :signup-ep :staff-ep :scheduling-ep :membership-ep]
          :accounts-ep [:database]
          :signup-ep [:database]
          :membership-ep [:database]
          :scheduling-ep [:database]
          :login-ep [:database]}))))
