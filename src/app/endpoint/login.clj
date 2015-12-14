(ns app.endpoint.login
  (:require [compojure.core :refer :all]
            [cheshire.core :refer :all]
            [ring.util.response :refer [redirect]]
            [clojure.pprint :refer [pprint]]
            [app.accounts :as act]
            [ring.util.anti-forgery :refer [anti-forgery-field]]
            [clojure.java.io :as io]))

;;config will contain the component items
(defn login-endpoint [config]
  (context "/login" []
    (GET "/" []
         (let [f (anti-forgery-field)]
          (io/resource "app/endpoint/login/login.html")))
    (GET "/success" []
      "SUCCESS")
    (GET "/failure" []
      "FAIL")
    (POST "/" []
      (redirect "/login/success"))))

