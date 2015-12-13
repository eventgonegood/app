(ns app.endpoint.login
  (:require [compojure.core :refer :all]
            [cheshire.core :refer :all]
            [ring.util.response :refer [redirect]]
            [clojure.pprint :refer [pprint]]
            [app.accounts :as act]
            [clojure.java.io :as io]))

;;config will contain the component items
(defn login-endpoint [config]
  (context "/login" []
    (GET "/" []
      (io/resource "app/endpoint/login/login.html"))
    (GET "/success" []
      "SUCCESS")
    (GET "/failure" []
      "FAIL")
    (POST "/login" []
      (redirect "/success"))))

