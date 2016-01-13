(ns app.coach.endpoint
  (:require
            [app.server.templates.layout :as l]
            [compojure.core :refer :all]))

(defmulti render-event :type)
(defmethod render-event :financial [event]
 [:li {:class "financial"} (:text event)] 
  )
(defmethod render-event :social [event]
  
 [:li {:class "social"} (:text event)] 
  )

(defn attendence-widget []
  [:div {:class "widget"}
   "Attendence"
   ]
  )
(defn pr-widget []
  [:div {:class "widget"}
   "PRs"
   ]
  )

(defn leaderboard-widget []
  [:div {:class "widget"}
   "LEADERBOARD"
   ]
  )

(defn coach-sidebar-widget []
[:div {:class "widget-sidebar"}
 ;widgets
 ;actions
 ;quick books status
 (attendence-widget)
 (pr-widget)
 (leaderboard-widget)
 ]  
  )


(defn timeline-widget []
  [:ul {:class "events"}
   (for [evt [{:type :financial :text "MONEY"} {:type :social :text "BIRTHDAY"}]]
     (render-event evt)
     )
   ]
  )

(defn coach-timeline-widget []
  [:div
   [:h1 "Programming Notes"]
   (timeline-widget)
   ]
  )

(defn coach-endpoint [config]
  (GET "/coach" request
       (l/landing-chrome "COACH" 
                         (coach-timeline-widget)
                         (coach-sidebar-widget)
                         )
       )
  )
