(ns app.endpoints.accounts
  (:require [app.accounts.db :as a]
            [app.endpoints.templates.layout :as l]
            [compojure.core :refer :all]))

(defn account-overview [accounts]
  [:section {:class "accounts"}
   [:h1 "Organizations"]
   (for [a accounts]
     [:p "Stuff"])])

(defn accounts-endpoint [config]
  (let [db (:accounts config)]
    (context "/accounts" []
      (GET "/" []
        (let [accounts (a/get-all db)]

          (l/chrome "Accounts" (account-overview accounts)))))))

