(ns app.competitions-tests
  (:require [clojure.test :refer :all]
            [com.rpl.specter :as s]
            [app.competitions.competitions :as c]
            [app.util :as u]
            [com.rpl.specter.macros :as d]
            [com.rpl.specter.protocols :as p]))

(deftest all-vs-all2
  (let [all (s/select [:events s/ALL] c/a-competition)
        all2 (s/select [:events u/ALL2] c/a-competition)]
    (is (= all all2))))

