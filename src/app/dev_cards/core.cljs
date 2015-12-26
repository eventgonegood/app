(ns app.dev-cards.core
  (:require
    [sablono.core :as sab :include-macros true])
  (:require-macros
    [devcards.core :as dc :refer  [defcard deftest]]))

(enable-console-print!)

(defn abc  [namey]
  [:div  [:strong namey]])

(defcard first-card
  (sab/html  (abc "linda")))

(defcard second-card
  (sab/html  [:div
              [:h1 "Linda is your first devcard!"]]))

(defn main  []
  ;; conditionally start the app based on wether the #main-app-area
  ;; node is on the page
  (if-let  [node  (.getElementById js/document "main-app-area")]
    (js/React.render  (sab/html  [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html



