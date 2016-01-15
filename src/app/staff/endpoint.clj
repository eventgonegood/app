(ns app.staff.endpoint
  (:require
            [app.server.templates.layout :as l]
            [app.events :as events]
            [compojure.core :refer :all]))

(defmulti render-event :type)
(defmethod render-event :financial [event]
 [:li {:class "financial"} 
  (:content event)
  [:div 
   (for [a (:actions event)]
     [:span a]
     )
   ]
  ] 
  )

(defmethod render-event :social [event]
  
 [:li {:class "social"} (:text event)] 
  )


(defn quickbooks-status []
  [:div {:class "quickbooks-status"}
   "Quick Books Integration"
   [:small "Last Export was 2hrs ago"]
   ]
  )

(defn mrr-widget []
  [:div {:class "metric"}
   "$200k"
   [:small "MMR"]
   ]
  )
(defn churn-widget []
  [:div {:class "metric"}
   "up 3.4%"
   [:small "Churn"]
   ]
  )
(defn population-metric []
  [:div {:class "metric"}
   "242"
   [:small "Population"]
   ]
  )

(defn unpaid-metric []
  [:div
   [:table
    [:caption "Members needing attention"]
    [:thead
     [:tr
      [:th "Member"]
      [:th "Amount"]
      ]
     ]
    [:tbody
     [:tr
      [:td "Jake Smith"]
      [:td "$54.00"]
      ]
     ]
     [:tr
      [:td "John Doe"]
      [:td "$54.00"]
      ]
      
    [:tfoot
     [:tr
      [:td "2 members"]
      [:td "$108.00"]
      ]
     ]
    ]
   ]
  )

(defn staff-metrics []
  [:div {:class "metrics-sidebar"}
    (mrr-widget)
    (churn-widget)
    (population-metric)
    (unpaid-metric)])

(defn staff-sidebar-widget []
[:div
 (staff-metrics)
 (quickbooks-status)])


(defn timeline-widget []
  [:ul {:class "events"}
   (render-event (events/needs-to-pay-log 1 "Dru" 65))
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
