(ns app.security.endpoint
  (:require [compojure.core :refer :all]
            [cheshire.core :refer :all]
            [ring.util.response :refer [redirect]]
            [app.security.db :as sec]
            [app.util :refer [trim-request]]
            [app.server.templates.layout :as l]
            [ring.util.anti-forgery :refer [anti-forgery-field]]
            [clojure.java.io :as io]))

(defn logout-endpoint [config]
  (GET "/logout" []
    (->
     (redirect "/login")
     (assoc  :session {}))))

;;config will contain the component items
(defn login-endpoint [config]
  (context "/login" []
    (GET "/" []
      (let [f (anti-forgery-field)]
        (l/chrome "YO" 
                  [:div {:id "login-box"}
                   [:form {:method "POST"}
                    [:label "Username"]
                    [:input {:type "text" :name "username" :autofocus "autofocus"}]
                    [:label "Password"]
                    [:input {:type "password" :name "password"}]
                    [:button {:type "submit"} "submit"]]])))
    (POST "/" request 
      (let [username (get-in request [:form-params "username"])
            password (get-in request [:form-params "password"])
            session (:session request)
            next-url (get-in request [:query-params "next"] "/")
            updated-session (assoc session :identity (keyword username))
            result (sec/auth (:database config) username password)]
        (if (result 0)
          (let [u (-> (redirect next-url) (assoc :session updated-session))]
            u)
          (redirect "/login"))))))
