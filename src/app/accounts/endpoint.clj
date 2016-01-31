(ns app.accounts.endpoint
  (:require
   [app.security.identities :as i]
   [app.accounts.views :as v]
   [app.server.templates.layout :as l]
   [compojure.core :refer :all]))

(defn signup-endpoint [config]
  (let [{db :database} config]
    (context "/signup" []
      (GET "/" []
        (l/chrome "Signup" (v/signup-form)))
      (GET "/λ" []
        "WUT")
      (POST "/" [email password confirm_password]
        (if (= password confirm_password)
          (->
           (i/register-identity db email password)
           (i/send-validation-email)
           (v/post-signup-view))
          (l/chrome "WHOOT" "Password Mismatch")))
      (context "/drop-in" []
        (GET "/" []
          "DROP IN FORM")))))

;config contains the various parameters
(defn accounts-endpoint [config]
  (context "/accounts" []
    (GET "/welcome" request
      (l/chrome "Welome" (v/welcome-overview)))
    (GET "/" []
      (let [db (:accounts config)
            orgs []
            users []
            roles []]
        (l/chrome "Accounts" (v/account-overview orgs users roles))))
    (GET "/org/:id" [id]
      (l/chrome "ORGS" (str "HI " id)))))
