(ns app.competitions-tests
  (:require [clojure.test :refer :all]
            [com.rpl.specter :as s]
            [app.competitions :as c]
            [com.rpl.specter.macros :as d]
            [com.rpl.specter.protocols :as p]))

(d/defpath ALL2 []
  (select* [this structure next-fn]
           (doall (mapcat next-fn structure)))
  (transform* [this structure next-fn]
              (mapv next-fn structure))) 

(deftest all-vs-all2
  (let [all (s/select [:events s/ALL] c/a-competition)
        all2 (s/select [:events ALL2] c/a-competition)]
    (is (= all all2))))

