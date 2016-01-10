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
            [app.endpoints.example :refer [example-endpoint]]
            [app.security.middleware :refer [egg-backend egg-access-rules]]
            [app.endpoints.login :refer [login-endpoint logout-endpoint]]
            [app.endpoints.landing :refer [landing-endpoint]]
            [app.accounts.endpoint :refer [accounts-endpoint signup-endpoint]]
            [app.endpoints.score-entry :refer [score-entry-endpoint]]
            [app.endpoints.leaderboard :refer [leaderboard-endpoint]]
            [app.server.http :refer [new-http]]
            [app.accounts.db :refer [new-accounts-db]]  
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
         :example (endpoint-component example-endpoint)
         :login (endpoint-component login-endpoint)
         :logout (endpoint-component logout-endpoint)
         :score-entry (endpoint-component score-entry-endpoint)
         :landing (endpoint-component landing-endpoint)
         :leaderboard (endpoint-component leaderboard-endpoint)
         :accounts (new-accounts-db database)
         :accounts-ep (endpoint-component accounts-endpoint)
         :signup-ep (endpoint-component signup-endpoint))
        (component/system-using
         {:http [:app]
          :app  [:example :login :logout :leaderboard :landing :score-entry :accounts-ep :signup-ep]
          :accounts []
          :accounts-ep [:accounts]
          :login [:accounts]
          :example [:accounts]}))))
