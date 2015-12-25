(ns app.endpoint.leaderboard
  (:require [compojure.core :refer :all]
            [cheshire.core :refer :all]
            [ring.util.response :refer [redirect]]
            [clojure.pprint :refer [pprint]]
            [net.cgrand.enlive-html :as html]
            [app.endpoint.login :refer [container]]
            [clojure.java.io :as io]))


(html/defsnippet leaderboard-html "app/templates/leaderboard.html" [:table] []
  ;no content - YET - just grab the table
  )



;;config will contain the component items
(defn leaderboard-endpoint [config]
  (context "/leaderboard" []
           (GET "/" []
                (container "hi" (leaderboard-html)))))

