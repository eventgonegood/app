(ns app.dev-cards.core
  (:require
    [om.core :as om :include-macros true]
    [app.dev-cards.leaderboard]
    [sablono.core :as sab :include-macros true])
  (:require-macros
    [devcards.core :as dc :refer  [defcard deftest]]))

(enable-console-print!)

(defn abc  [namey]
  [:div  [:strong namey]])

(defcard unscored
  (sab/html [:table
             [:tbody 
             [:tr
              [:td "hi"]
              ]]
             ]))


(defn main  []
  ;; conditionally start the app based on wether the #main-app-area
  ;; node is on the page
  (if-let  [node  (.getElementById js/document "main-app-area")]
    (js/React.render  (sab/html  [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html



