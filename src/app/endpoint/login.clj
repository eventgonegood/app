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

(def container (html/template "app/templates/container.html" [title content]
                              [:head :title] (html/content title)
                              [:section.stage] (html/substitute content)))

(html/deftemplate container2 "app/templates/container.html"  [title] 
  [:head :title]  (html/content title))

;;config will contain the component items
(defn login-endpoint [config]
  (context "/login" []
    (GET "/" []
      (let [f (anti-forgery-field)]
        (container "hi" "YO")))
    (GET "/success" []
      "SUCCESS")
    (GET "/failure" []
      "FAIL")
    (POST "/" []
      (redirect "/login/success"))))

(comment 

  (html/defsnippet profile "app/templates/menu.html"  [:.profile-element]  [name title]
    [:strong]  (html/content name)
    [:span.title]  (html/content title))

  (html/defsnippet menu-link "app/templates/menu.html"  [:.nav-items :> html/first-child]  [text]
    [:.nav-label]  (html/content text))

  (html/defsnippet head "app/templates/head.html"  [:head]  [title]
    [:title]  (html/content title))

  (html/defsnippet menu "app/templates/menu.html"  [:nav]  [menu]
    [:.nav-items]  (html/content  (map #(menu-link  (:title %)) menu)))

  (html/defsnippet foot-js "app/templates/foot-js.html"  [:script]  []
  ;there is no content to replace
)

  (html/deftemplate layout "app/templates/index.html" [menu-data title content] 
    [:head] (html/substitute  (head title))
    [:#stage] (html/substitute content)
    [:#scripts] (html/substitute (foot-js))
    [:nav#main-nav] (html/substitute (menu menu-data))
    [:.profile-element] (html/substitute (profile "Dru" "DEV MONSTER"))))
