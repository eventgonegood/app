(ns app.endpoints.score-entry
  (:require [compojure.core :refer :all]
            [app.endpoints.templates.layout :as l]))

(defn score-entry-html []
  [:div {:id "score-entry"}
   [:div {:id "entry"}]
   [:div {:id "display"}]])

(defn score-entry-endpoint [config]
  (context "/score-entry" []
    (GET "/" []
      (l/chrome "score entry" (score-entry-html)))))
