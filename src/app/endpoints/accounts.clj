(ns app.endpoints.accounts
  (:require [app.accounts.db :as a]
            [app.endpoints.templates.layout :as l]
            [compojure.core :refer :all]))

(defn account-overview [accounts users roles]
  [:section {:class "accounts"}
   [:h1 "Accounts"]
   [:div
   [:div 
    [:h2 "Organizations"]
    
   (for [a accounts]
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
        (let [accounts (a/load-all-organizations db)
              account-fake [{:name "Demo"}]
              users [{:name "Dru"}]
              roles [{:name "sa"}]
              ]

          (l/chrome "Accounts" (account-overview account-fake users roles)))))))

