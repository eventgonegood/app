(ns app.accounts.endpoint-test
  (:require [com.stuartsierra.component :as component]
            [clojure.test :refer :all]
            [kerodon.core :refer :all]
            [kerodon.test :refer :all]
            [app.accounts.endpoint  :as ep]))

(def handler 
  (ep/accounts-endpoint {}))

(deftest smoke-test
  (testing "signup page"
    (-> (session handler)
        (visit "/signup")
        (has (status? 200) "page exists"))))
