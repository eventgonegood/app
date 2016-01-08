(ns app.endpoints.accounts
  (:require [app.accounts.db :as a]
            [app.endpoints.templates.layout :as l]
            [compojure.core :refer :all]))

(defn account-overview [orgs users roles]
  [:section {:class "accounts"}
   [:h1 "Accounts"]
   [:div
   [:div 
    [:h2 "Organizations"]
    
   (for [a orgs]
     [:p (:name a)])  
    ]
   [:div 
    [:h2 "Users"]
   (for [a users]
     [:p (:name a)])  
     
    ]
   [:div
    [:h2 "Roles"]
   (for [a roles]
     [:p (:name a)])  
    ]]
   ])

(defn accounts-endpoint [config]
  (let [db (:accounts config)]
    (context "/accounts" []
      (GET "/" []
        (let [orgs (a/load-all-organizations db)
              users (a/load-all-users db)
              roles (a/load-all-roles db)
              ]

          (l/chrome "Accounts" (account-overview orgs users roles)))))))

