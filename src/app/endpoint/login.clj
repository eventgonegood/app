(ns app.endpoint.login
  (:require [compojure.core :refer :all]
            [cheshire.core :refer :all]
            [ring.util.response :refer [redirect]]
            [clojure.pprint :refer [pprint]]
            [app.accounts :as act]
            [net.cgrand.enlive-html :as html]
            [ring.util.anti-forgery :refer [anti-forgery-field]]
            [clojure.java.io :as io]))

(html/defsnippet foot-js "app/templates/foot-js.html" [:script] []
  ;no content to replace just grabbing the script tags
  )

(html/deftemplate layout "app/templates/sample.html"  [title] 
  [:head :title]  (html/content title))

;;config will contain the component items
(defn login-endpoint [config]
  (context "/login" []
           (GET "/" []
                (let [f (anti-forgery-field)]
                  (layout "hi")))
           (GET "/success" []
                "SUCCESS")
           (GET "/failure" []
                "FAIL")
           (POST "/" []
                 (redirect "/login/success"))))

