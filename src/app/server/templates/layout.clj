(ns app.server.templates.layout
  (:require [hiccup.page :refer [include-css html5 include-js]]
            [app.server.navigation :as nav]))

(defn head 
  "Builds out the title and adds javascript"
  [title]
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
   [:link {:rel "shortcut icon" :href "/img/favicon.png"}]
   [:title title]
   (include-css "/css/generated.css")])

(defn render-login-state [login-state]
  (if-let [{avatar :avatar username :username} login-state] 
    [:div {:class "login-state"}
     [:img {:src avatar :alt username :height 20}]
     [:a {:href "/logout"} "Logout"]]))

(defn render-navigation []
  (let [navi (nav/build)]
    [:nav
     (for [n navi]
       [:a {:href (:href n)} (:label n)])]))

(defn chrome 
  "Draw the main layout of a page"
  ([title body]
   (chrome title nil body))
  ([title login-state body]
   (html5
    (head title)
    [:body
     [:div {:id "chrome"}
      [:header
       [:img {:src "/img/header-logo.png" :height "18px" :width "18px"}]
       (render-navigation)
       (render-login-state login-state)]
      [:div {:id "stage"}
       body]]
     #_(include-js "/js/compiled/client.js")])))

(defn landing-chrome 
  "Draw the standard landing page chrome"
  ([title left right]
   (landing-chrome title nil left right))
  ([title login-state left right]
   (chrome title 
           login-state
           [:div {:id "landing"}

            [:div {:id "landing-content"}
             left]
            [:div {:id "landing-sidebar"}
             right]])))
