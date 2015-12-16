(ns app.accounts-test
  (:require [com.stuartsierra.component :as component]
            [clojure.test :refer :all]
            [kerodon.core :refer :all]
            [kerodon.test :refer :all]
            [app.accounts :as a]))

(deftest format-user
 (let [sample-user [
                   {:id 1, :name "Dru Sellers", :username "drusellers", :password "bcrypt+blake2b-512$a2f4901cba2b41251b9bc1fa4177e41e$12$a32a0a4c85a156a9c27aea91c526ea051a670d6b3066fa63", :organization "demo", :role "sa"}
                  {:id 1, :name "Dru Sellers", :username "drusellers", :password "bcrypt+blake2b-512$a2f4901cba2b41251b9bc1fa4177e41e$12$a32a0a4c85a156a9c27aea91c526ea051a670d6b3066fa63", :organization "demo", :role "box"}
                    ]
       formatted (a/format-user sample-user)
       ]
   (is (:roles formatted) ["sa" "box"])
   (is (:id formatted) 1)
   (is (:organization formatted) "demo")
   ) 

  )
