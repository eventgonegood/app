(ns app.security.identities
  (:require 
   [com.stuartsierra.component :as component]
   [buddy.hashers :as hs]
   [clavatar.core :refer [gravatar]]
   [aggregate.core :as agg]
   [yesql.core :refer [defqueries]]))

(def security-er (agg/make-er-config
                  (agg/entity :security.identities)))

; (agg/load security-er conn :security.identities 1)


(defqueries "sql/security.sql")

(defn load-identity [db id]
  (agg/load security-er db :security.identities id))

(defn find-identity [db username]
  (first (sql-find-identity-by-username {:username username} {:connection db})))

(defn auth [db username password]
  (let [id (find-identity db username)
        unauthed [false "Invalid username or password"]]
    (if id
      (if (hs/check password (:password id))
        [true {:user (dissoc id :password)}]
        unauthed)
      unauthed)))

(defn register-identity [db email username password]
  (first (sql-insert-identity {:name username :email email :username username :password (hs/encrypt password)} {:connection db})))

(defn load-all-identities [db]
  (sql-all-identities {} {:connection db}))

(defn extract [request]
  (let [identity (:identity request)]
    (assoc identity :avatar (gravatar (:email identity) :default :retro :size 40))))

(defn send-validation-email [identity]
  (println (str "SENT EMAIL TO " (:email identity)))  
  identity)
