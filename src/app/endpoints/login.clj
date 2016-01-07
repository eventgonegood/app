(ns app.endpoints.login
  (:require [compojure.core :refer :all]
            [cheshire.core :refer :all]
            [ring.util.response :refer [redirect]]
            [clojure.pprint :refer [pprint]]
            [app.accounts.db :as act]
            [app.util :refer [trim-request]]
            [app.endpoints.templates.layout :as l]
            [ring.util.anti-forgery :refer [anti-forgery-field]]
            [clojure.java.io :as io]))

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

    (GET "/success" []
      "SUCCESS")
    (GET "/failure" []
      "FAIL")
    (POST "/" request 
      (clojure.pprint/pprint (trim-request request))
      (let [username (get-in request [:form-params "username"])
            password (get-in request [:form-params "password"])
            session (:session request)
            result (act/auth (:accounts config) username password)]
        (if (result 0)
          (redirect "/login/success")
          (redirect "/login/failure"))))))
