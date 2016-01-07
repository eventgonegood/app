(ns app.accounts.organizations
  (:require 
   [com.stuartsierra.component :as component]
   [schema.core :as s]
   [buddy.hashers :as hs]))

(s/defschema User
  {:id s/Int
   :name s/Str
   :username s/Str
   :password s/Str}) (s/defschema Organization
                       {:id s/Int
                        :name s/Str
                        (s/optional-key :users) [User]})

(s/defschema Role
  {:id s/Int
   :name s/Str}) (defn new-user [name username password]
                   {:id 0
                    :name name
                    :username username
                    :password password})

(defn new-organization [name]
  {:id 0
   :name name
   :users []})  

(defn add-user [organization user]
  (update-in organization [:users] #(conj % user)))

(def an-org (->
             (new-organization "Karhu")
             (add-user (new-user "Dru" "drusellers" "abc"))
             (add-user (new-user "Mike" "winchester" "abc"))))

