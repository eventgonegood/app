(ns app.athlete.endpoint
  (:require
   [app.server.templates.layout :as l]
   [compojure.core :refer :all]))

(defn personal-stats-widget []
  [:div {:class "widget"}
   "Personal Stats"])

(defn athlete-sidebar-widget []
  [:div {:class "widget-sidebar"}
 ;widgets
 ;actions
 ;quick books status
   (personal-stats-widget)])

(defn todays-wod-widget []
  [:div
   [:h1 "Todays WOD"]
   [:p "FRAN"]])

(defn athlete-endpoint [config]
  (GET "/athlete" request
    (l/landing-chrome "ATHLETE" 
                      (todays-wod-widget)
                      (athlete-sidebar-widget))))
