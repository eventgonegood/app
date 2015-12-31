(ns app.accounts.payments
  (:require 
   [clj-stripe.util :as util]
   [clj-stripe.common :as common]
   [clj-stripe.plans :as plans]
   [clj-stripe.coupons :as coupons]
   [clj-stripe.charges :as charges]
   [clj-stripe.cards :as cards]
   [clj-stripe.subscriptions :as subscriptions]
   [clj-stripe.customers :as customers]
   [clj-stripe.invoices :as invoices]
   [clj-stripe.invoiceitems :as invoiceitems]
   [com.stuartsierra.component :as component]))

(defrecord Payments  [secret-key public-key db]
  ;; Implement the Lifecycle protocol
  component/Lifecycle

  (start  [component]
    (println ";; Starting Payments")
    ;; In the 'start' method, initialize this component
    ;; and start it running. For example, connect to a
    ;; database, create thread pools, or initialize shared
    ;; state.
    component)

  (stop  [component]
    (println ";; Stopping Payments")
    ;; Return the component, optionally modified. Remember that if you
    ;; dissoc one of a record's base fields, you get a plain map.
    component))

(defn new-payments  [stripe-config]
  (map->Payments stripe-config))

; returns a hash with :id
(defn create-customer  [payments the-identity plan]
  (common/with-token  (:secret-key payments)
    (common/execute 
     (customers/create-customer 
      (customers/email  (:username the-identity))))))

(defn register-plans  [payments]
  (common/with-token  (:secret-key payments)
    (common/execute  (plans/create-plan "plan1"  (common/money-quantity 500 "usd")  (plans/monthly) "Starter"))
    (common/execute  (plans/create-plan "plan2"  (common/money-quantity 1000 "usd")  (plans/monthly) "Professional"))))

