(ns app.endpoints.score-entry
  (:require [compojure.core :refer :all]
            [app.endpoints.templates.layout :as l]))

(defn score-entry-html []
  [:div {:id "score-entry"}
   
  [:h1 "Entering scores for "
   [:strong "Fran"]
   ]
[:div {:class "left"}
"Score Entry Widget" 
 ]
[:div {:class "right"}
 [:div
  "Scores Recorded"
  ]
 [:div 
  "Scores Needed"
  ]
 ]
   ]
  )

(defn score-entry-endpoint [config]
 (context "/score-entry" []
          (GET "/" []
               (l/chrome "score entry" (score-entry-html)))))
