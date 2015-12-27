(ns app.dev-cards.leaderboard
  (:require
    [om.core :as om :include-macros true]
    [sablono.core :as sab :include-macros true])
  (:require-macros
    [devcards.core :as dc :refer  [defcard deftest]]))

(defn build-leaderboard []
  
  )

(defn build-headers []
  
  )

(defn leaderboard-widget [data]
  (om/component
  (sab/html [:table {:class "leaderboard"}
             [:thead
              [:tr
               [:th "bill"]
               [:th "bill"]
               [:th {:class "event"} "Event 1"]
               ]
              ]
             [:tbody 
             [:tr
              [:td {:class "rank"} 
               [:div "1"]
               [:div "22pts"]
               ]
              [:td {:class "athlete"}
               [:div (:text data)]
               [:div "CrossFit Jaakarhu"]
               ]
              [:td {:class "event"} "hi"]
              ]]
             ])))

(defcard a-leaderboard
  (dc/om-root leaderboard-widget)
  {:text "ye"}
  )




