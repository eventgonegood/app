(ns app.staff.endpoint
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


(defn mrr-widget []
  [:div {:class "widget"}
   "MRR"
   ]
  )
(defn quickbooks-widget []
  [:div {:class "widget"}
   "Last Export was 2hrs ago"
   ]
  )

(defn churn-widget []
  [:div {:class "widget"}
   "CHURN"
   ]
  )

(defn staff-sidebar-widget []
[:div {:class "widget-sidebar"}
 ;widgets
 ;actions
 ;quick books status
 (mrr-widget)
 (churn-widget)
 (quickbooks-widget)
 ]  
  )


(defn timeline-widget []
  [:ul {:class "events"}
   (for [evt [{:type :financial :text "MONEY"} {:type :social :text "BIRTHDAY"}]]
     (render-event evt)
     )
   ]
  )

(defn staff-timeline-widget []
  [:div
   [:h1 "Action Items"]
   (timeline-widget)
   ]
  )

(defn staff-endpoint [config]
  (GET "/staff" request
       (l/landing-chrome "STAFF" 
                         (staff-timeline-widget)
                         (staff-sidebar-widget)
                         )
       )
  )
