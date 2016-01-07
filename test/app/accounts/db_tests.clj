(ns app.accounts.db-tests
  (:require [clojure.test :refer :all]
            [app.accounts.db :as db]))

(deftest format-organization
  (let [sample-org [{:organization_id 1, :organization_name "bob", :user_name "Dru" :username "drusellers" :user_id 22, :role "sa"}
                    {:organization_id 1 :organization_name "bob" :user_name "Dru" :username "drusellers" :user_id 22 :role "user"}
                    {:organization_id 1 :organization_name "bob" :user_name "Ryan" :username "rauhryan" :user_id 23 :role "user"}
                    ]
        formatted (db/format-organization sample-org)]

    (is (= (count (:users formatted)) 2))
    ))
