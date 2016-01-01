(ns app.endpoints.leaderboard
  (:require [compojure.core :refer :all]
            [cheshire.core :refer :all]
            [ring.util.response :refer [redirect]]
            [clojure.pprint :refer [pprint]]
            [app.competitions :as competitions]
            [app.endpoints.templates.layout :as l]
            [clojure.java.io :as io]))

(defn leaderboard-html [competition]
  [:table {:class "leaderboard"}
   [:thead
    [:tr
     [:th "Overall"]
     [:th "Athlete"]
     (for [e (:events competition)]
       [:th {:class "event"} (:name e)])
     ]
    ]
   [:tbody
    (for [c (:competitors competition)]
    [:tr
     [:td {:class "rank"}
      [:div "1"]
      [:div "22pts"]
      ]
     [:td {:class "athlete"}
      [:div (:name c)]
      [:div (:gym c)]
      ]
     (for [s (vals (:scores c))]
     [:td {:class "event"}
      [:div "1"]
      [:div
       [:div "22 pts"]
       [:div "5:22"]
       ]
      ])
     ])
    ]
   ]
)

;;config will contain the component items
(defn leaderboard-endpoint [config]
  (context "/leaderboard" []
    (GET "/" []
      (l/chrome "leaderboard" (leaderboard-html competitions/a-competition)))))

