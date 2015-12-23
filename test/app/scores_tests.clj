(ns app.scores-tests
  (:require [app.scores :as s]
            [clojure.test :refer :all]))

(deftest short-rank
  (let [scores [1 1 2 3]
        ranked (s/condense scores)]
    (is ranked [1 1 3 4])))

(deftest long-rank
  (let [scores [1 1 2 3 3 4 5 5]
        ranked (s/condense scores)]
    (is ranked [1 1 3 4 4 6 7 7])))

(deftest evaluation 
  (let [result (s/ev 4 4 4 5)]
    (is 5 result)))
