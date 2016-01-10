(ns app.client.score-entry
  (:require
   [om.core :as om :include-macros true]
   [app.util :as u]
   [com.rpl.specter :as s]
   [com.rpl.specter.protocols :as p]
   [sablono.core :as html :refer-macros [html]])
  (:require-macros [com.rpl.specter.macros :as d]))

(d/defpath ALL2 []
  (p/select* [this structure next-fn]
             (doall (mapcat next-fn structure)))
  (p/transform* [this structure next-fn]
                (mapv next-fn structure)))

(defn score-entry-widget [data owner]
  (om/component
   (let [the-comp (:competition data)
         event-id (:current-event data)
         measures (s/select [:events ALL2] the-comp)]
     (html [:div {:class "score-entry"}
            [:div {:class "input"}
             (for [m measures]
               [:label 
                [:input {:type "text"}] 
                [:span (:name m)]])]
            [:button "Submit"]]))))

(defn score-display-widget [data owner]
  (om/component
   (html
    [:li (:name data)])))

(defn scores-display-widget [data owner]
  (om/component 
   (let [the-comp (:competition data)
         competitors (:competitors the-comp)]
     (html  
      [:ul
       (om/build-all score-display-widget competitors)]))))

