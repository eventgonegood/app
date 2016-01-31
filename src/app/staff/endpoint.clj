(ns app.staff.endpoint
  (:require
   [app.server.templates.layout :as l]
   [app.staff.views :as v]
   [app.security.identities :as ident]
   [compojure.core :refer :all]))

(defn staff-endpoint [config]
  (GET "/staff" request
    (let [login-state (ident/extract request)]
      (l/landing-chrome "STAFF" 
                        login-state
                        (v/staff-timeline-widget)
                        (v/staff-sidebar-widget)))))
