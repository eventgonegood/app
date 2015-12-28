(ns app.dev-cards.leaderboard
  (:require
   [om.core :as om :include-macros true]
   [app.competitions :as c]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer  [defcard deftest]]))

(defn build-leaderboard [])

(defn build-headers [])

(defn leaderboard-widget [data]
  (om/component
   (sab/html [:table {:class "leaderboard"}
              [:thead
               [:tr
                [:th "bill"]
                [:th "bill"]
                (for [e (:events data)]
                  
                [:th {:class "event"} (:name e)]  
                  )
                ]]
              [:tbody 
               (for [c (:competitors data)]
               [:tr
                [:td {:class "rank"} 
                 [:div "1"]
                 [:div "22pts"]]
                [:td {:class "athlete"}
                 [:div (:name c)]
                 [:div (:gym c)]
                ]
                (for [ s (vals  (:scores c))]
                  [:td {:class "event"}
                   (:value s)
                   ]
                  )
                ])]])))

(defn score-entry-widget [data]
  (om/component
    (sab/html [:div {:class "score-entry"}
               (for [m (:measures data)]
                 [:div
                   [:label (:name m)]
                   [:input {:value (:name m) :type "text"}] 
                  ])
                 [:button "Submit"]
               ])))

(def score (get-in c/a-competition [:competitors 0]))

(defcard a-leaderboard
  (dc/om-root leaderboard-widget)
  c/a-competition
  {:inspect-data true}
  )


(defcard one-score-entry
  (dc/om-root score-entry-widget)
  {:measures [{
               :name "Sets"
               }
              ]}
  )

(defcard two-score-entry
  (dc/om-root score-entry-widget)
  {:measures [{
               :name "Sets"
               }
              {:name "Reps"}
              ]}
  )
