(ns app.coach.endpoint
  (:require
   [app.server.templates.layout :as l]
   [compojure.core :refer :all]))

(defmulti render-event :type)
(defmethod render-event :financial [event]
  [:li {:class "financial"} (:text event)])
(defmethod render-event :social [event]

  [:li {:class "social"} (:text event)])

(defn coach-actions []
  [:div {:class "widget-sidebar"}
   [:div {:class "action"}
    "Plan WOD"]])

(defn pr-widget []
  [:div {:class "widget"}
   "Jeff V. - +5# Snatch"
   [:small "PRs"]])

(defn leaderboard-widget []
  [:div {:class "widget"}
   "LEADERBOARD"])

(defn attendence-metric []
  [:div {:class "metric"}
   "3 classes (62 people)"
   [:small "Classes (Population)"]])

(defn days-til-open-metric []
  [:div {:class "metric"}
   "26 days"
   [:small "until the Open"]])

(defn coach-metrics []
  [:div {:class "metrics-sidebar"}
   (attendence-metric) 
   (days-til-open-metric)])
(defn coach-sidebar-widget []
  [:div
   (coach-metrics)])

(defn timeline-widget []
  [:ul {:class "events"}
   (for [evt [{:type :financial :text "MONEY"} {:type :social :text "BIRTHDAY"}]]
     (render-event evt))])

(defn coach-timeline-widget []
  [:div
   [:h1 "Programming Notes"]
   (timeline-widget)])

(defn coach-endpoint [config]
  (GET "/coach" request
    (l/landing-chrome "COACH" 
                      (coach-timeline-widget)
                      (coach-sidebar-widget))))
