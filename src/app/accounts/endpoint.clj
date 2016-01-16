(ns app.accounts.endpoint
  (:require 
            [app.security.db :as i]
            [app.server.templates.layout :as l]
            [compojure.core :refer :all]))

(defn signup-form []
  [:h1 "signup"]
  [:section {:id "login-box"}
   [:form {:action "" :method "POST"}
    [:label "Email Address"]
    [:input {:type "text" :name "email"}] 
    [:label "Password"]
    [:input {:type "password" :name "password"}] 
    [:label "Confirm Password"]
    [:input {:type "password" :name "confirm_password"}] 

    [:button {:type "submit"} "Create your account"]]])

(defn signup-endpoint [config]
  (let [{db :database} config] 
    (context "/signup" []
      (GET "/" []
        (l/chrome "Signup" (signup-form)))
      (POST "/" [email password confirm_password]
        (if (= password confirm_password)
          (do 
            (i/register-identity db email password)
            (l/chrome "WHOOT" (str email " : " password))   )
          (l/chrome "WHOOT" "Password Mismatch"))))))

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

(defn welcome-overview []
  [:div {:id "welcome-page"}
   [:div "left"]
   [:div "right"]
   ]
  )

;config contains the various parameters
(defn accounts-endpoint [config]
  (context "/accounts" []
    (GET "/welcome" request
      (l/chrome "Welome" (welcome-overview))         
         )
    (GET "/" []
      (let [db (:accounts config)
            orgs []
            users []
            roles []]
        (l/chrome "Accounts" (account-overview orgs users roles))))
    (GET "/org/:id" [id]
      (l/chrome "ORGS" (str "HI " id)))))
