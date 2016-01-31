(ns app.accounts.views
  (:require [app.server.templates.layout :as l]))
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

(defn post-signup-view [identity]
  (l/chrome "Thank You"
            [:div
             [:p (str "Thank you for signing up. You will get an email soon. " (:email identity))]]))

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
   [:div "right"]])
