(ns app.security.endpoint
  (:require [compojure.core :refer :all]
            [cheshire.core :refer :all]
            [ring.util.response :refer [redirect]]
            [clojure.pprint :refer [pprint]]
            [app.accounts.db :as act]
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
                    [:form {:method "POST"}
                     [:label "Username"]
                     [:input {:type "text" :name "username"}]
                     [:label "Password"]
                     [:input {:type "password" :name "password"}]
                     [:button {:type "submit"} "submit"]])))

      (GET "/success" request
        "SUCCESS")
      (GET "/failure" []
        "FAIL")
      (POST "/" request 
        (let [username (get-in request [:form-params "username"])
              password (get-in request [:form-params "password"])
              session (:session request)
              next-url (get-in request [:query-params "next"] "/")
              updated-session (assoc session :identity (keyword username))
              result (act/auth (:accounts config) username password)]
          (if (result 0)
            (let [u (-> (redirect next-url) (assoc :session updated-session))]
              u)
            (redirect "/login/failure"))))))
