(ns app.security.middleware
  (:require 
   [app.util :refer [trim-request]]
   [app.server.templates.layout :as l]
   [buddy.auth.backends.session :refer [session-backend]]
   [buddy.auth :refer [authenticated?]]
   [buddy.auth.middleware :refer [wrap-authentication]]
   [buddy.auth.accessrules :refer [wrap-access-rules success error]]  
   [hiccup.core :refer [html]]
   [ring.util.response :refer [redirect]]
   ))

(defn unauthorized-handler [request metadata]
  (let [current-url (:uri request)]
    (redirect (format "/login?next=%s" current-url))))

(def egg-backend (session-backend {:unauthorized-handler unauthorized-handler}))

;;access rules
(defn any-access [request] true)

;;enventuall this should prolly redirect to a not authorized
(defn authenticated-access [request]
  (if (authenticated? request)
    true
    (error "YOU HAVE BEEN DENIED")))

(def rules [{:pattern #"^/(login|logout|signup)$"
             :handler any-access}
            {:pattern #"^/(css|js|img)/.*"
             :handler any-access}
            {:pattern #"^/.*"
             :handler authenticated-access}])

(defn error-band [text]
  (html 
   (l/head "error")
   [:body 
    [:section {:class "error-band e402"}
     [:h1 text]]]))

(defn on-error [request value]
  (if (authenticated? request)
    {:status 403
     :headers {}
     :body  (error-band "Not Authorizzed!")} 
    (redirect "/login")))

(def egg-access-rules {:rules rules
                       :on-error on-error})
