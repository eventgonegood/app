(ns app.endpoints.login
  (:require [compojure.core :refer :all]
            [cheshire.core :refer :all]
            [ring.util.response :refer [redirect]]
            [clojure.pprint :refer [pprint]]
            [app.accounts.db :as act]
            [app.endpoints.templates.layout :as l]
            [ring.util.anti-forgery :refer [anti-forgery-field]]
            [buddy.auth.backends.session :refer [session-backend]]
            [clojure.java.io :as io]))

(def backend (session-backend))

;;config will contain the component items
(defn login-endpoint [config]
  (context "/login" []
    (GET "/" []
      (let [f (anti-forgery-field)]
        (l/chrome "YO" 
                  [:form {:method "POST"}
                   [:label "Username"]
                   [:input {:type "text"}]
                   [:label "Password"]
                   [:input {:type "password"}]
                   [:button {:type "submit"} "submit"]])))

    (GET "/success" []
      "SUCCESS")
    (GET "/failure" []
      "FAIL")
    (POST "/" [request]
      (let [username (get-in request [:form-params "username"])
            password (get-in request [:form-params "password"])
            session (:session request)
            result (act/auth (:accounts config) username password)]
        (if (result 0)
          (redirect "/login/success")
          (redirect "/login/failure"))))))
