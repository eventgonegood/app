(ns app.accounts.endpoint
  (:require [app.accounts.db :as a]
            [app.server.templates.layout :as l]
            [compojure.core :refer :all]))

(defn signup-form []
  [:h1 "signup"]
  [:section 
   [:form {:action "" :method "POST"}
    [:label "Email Address"]
    [:input {:type "text" :name "email"}] 
    [:label "Password"]
    [:input {:type "password" :name "password"}] 
    [:label "Confirm Password"]
    [:input {:type "password" :name "confirm_password"}] 

    [:button {:type "submit"} "Create your account"]]])

(defn signup-endpoint [config]
  (context "/signup" []
    (GET "/" []
      (l/chrome "Signup" (signup-form)))
    (POST "/" [email password confirm_password]
      (l/chrome "WHOOT" (str email " : " password)))))

(defn account-overview [orgs users roles]
  [:section {:class "accounts"}
   [:h1 "Accounts"]
   [:div
    [:div 
     [:h2 "Organizations"]

     (for [a orgs]
       [:p (:name a)])]
    [:div 
     [:h2 "Users"]
     (for [a users]
       [:p (:name a)])]
    [:div
     [:h2 "Roles"]
     (for [a roles]
       [:p (:name a)])]]])

;config contains the various parameters
(defn accounts-endpoint [config]
  (context "/accounts" []

    (GET "/" []
      (let [db (:accounts config)
            orgs (a/load-all-organizations db)
            users (a/load-all-users db)
            roles (a/load-all-roles db)]
        (l/chrome "Accounts" (account-overview orgs users roles))))
    (GET "/org/:id" [id]
      (l/chrome "ORGS" (str "HI " id)))))
