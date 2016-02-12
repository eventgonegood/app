(ns app.membership.endpoint
  (:require
   [app.membership.members :as m]
   [app.server.templates.layout :as l]
   [app.security.identities :as ident]
   [cheshire.core :as json]
   [app.util :refer [str->int]]
   [ring.util.response :refer [redirect]]
   [compojure.core :refer :all]))

(defn membership-view [members]
  [:div
   [:h1 "Membership"]
   [:ul
    (for [m members]
    [:li (:profile_id m)]
      )

    ]
   ]
  )

(defn membership-endpoint [config]
  (context "/membership" request
    (GET "/" request
      (let [login-state (ident/extract request)
            db (:database config)
            members (m/members db 1)]
        (l/chrome "Membership"
                  login-state
                  (membership-view members))))))
