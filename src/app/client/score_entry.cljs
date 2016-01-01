(ns app.client.score-entry
  (:require
   [om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true]))

(enable-console-print!)

(defn abc  [namey]
  [:div  [:strong namey]])


(defn main  []
  ;; conditionally start the app based on wether the #main-app-area
  ;; node is on the page
  (if-let  [node  (.getElementById js/document "score-entry")]
    (js/React.render  (sab/html  [:div "This is working"]) node)))

(main)


