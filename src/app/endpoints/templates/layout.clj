(ns app.endpoints.templates.layout
  (:require [hiccup.page :refer [include-css html5 include-js]]))

(defn head 
  "Builds out the title and adds javascript"
  [title]
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
   [:link {:rel "shortcut icon" :href "/img/favicon.png"}]
   [:title title]
   (include-css "/css/generated.css")])

(defn chrome [title body]
  (html5
   (head title)
   [:body
    [:div {:id "chrome"}
     [:header
      [:img {:src "/img/header-logo.png" :height "18px" :width "18px"}]]
     [:div {:id "stage"}
      body]]
    (include-js "/js/compiled/client.js")]))

