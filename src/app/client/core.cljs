(ns app.client.core
  (:require
   [app.client.score-entry :as se]
   [app.competitions :as c]
   [om.core :as om :include-macros true]
   [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(defonce app-state (atom {:current-event 1
                          :current-division 1
                          :competition c/a-competition}))

(defn main  []
  ;; conditionally start the app based on wether the #main-app-area
  ;; node is on the page
  (if-let  [node  (.getElementById js/document "score-entry")]
    (let [l (.getElementById js/document "entry")
          r (.getElementById js/document "display")]
      (om/root se/score-entry-widget app-state {:target l})
      #_(om/root se/score-display-widget app-state {:target r}))))

(main)
