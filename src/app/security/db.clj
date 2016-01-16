(ns app.security.db
  (:require 
   [com.stuartsierra.component :as component]
   [buddy.hashers :as hs]
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

(defn register-identity [db username password]
  (sql-insert-identity {:name username :username username :password (hs/encrypt password)} {:connection db}))

(defn load-all-identities [db]
  (sql-all-identities {} {:connection db}))
