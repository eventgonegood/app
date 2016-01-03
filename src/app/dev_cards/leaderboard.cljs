(ns app.dev-cards.leaderboard
  (:require
   [om.core :as om :include-macros true]
   [app.competitions :as c]
   [app.client.score-entry :as se]
   [cljs.test :as t :refer [report] :include-macros true]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer  [defcard deftest]]
   [cljs.test :refer [is testing async]]))

(defn leaderboard-widget [data]
  (om/component
   (sab/html [:table {:class "leaderboard"}
              [:thead
               [:tr
                [:th "bill"]
                [:th "bill"]
                (for [e (:events data)]

                  [:th {:class "event"} (:name e)])]]
              [:tbody 
               (for [c (:competitors data)]
                 [:tr
                  [:td {:class "rank"} 
                   [:div "1"]
                   [:div "22pts"]]
                  [:td {:class "athlete"}
                   [:div (:name c)]
                   [:div (:gym c)]]
                  (for [s (vals  (:scores c))]
                    [:td {:class "event"}
                     (:value s)])])]])))

(def score (get-in c/a-competition [:competitors 0]))

(defcard a-leaderboard
  (dc/om-root leaderboard-widget)
  c/a-competition
  {:inspect-data true})

(defcard one-score-entry
  (dc/om-root se/score-entry-widget)
  {:measures [{:name "Reps"}]})

(defcard two-score-entry
  (dc/om-root score-entry-widget)
  {:measures [{:name "Sets"}
              {:name "Reps"}]})

(deftest bob-bill
  "##Tests"
  (testing "hi guys"
    (is (= (+ 2 2) 4))))
