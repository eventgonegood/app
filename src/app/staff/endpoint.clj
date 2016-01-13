
(ns app.staff.endpoint
  (:require
            [app.server.templates.layout :as l]
            [compojure.core :refer :all]))


(defn staff-endpoint [config]
  (GET "/staff" request
       (l/landing-chrome "STAFF" 
                         "LEFT"
                         "RIGHT"
                         )
       )
  )
