(ns app.scores-tests
  (:require [clojure.test :refer :all] 
    [app.scoring :as s]
            [clojure.pprint :refer [pprint]]
            [app.competitions :as c]))

(deftest can-extract-scores
  (let [extraction (s/extract-scores c/a-competition 1)]
    (is (= extraction [20 21 22 23]))))

(deftest can-rank-scores-time
  (let [ranked (s/rank-scores c/a-competition 1)]
    (is (= {20 1, 21 2, 22 3, 23 4} ranked))))

(deftest can-rank-scores-task
  (let [ranked (s/rank-scores c/a-competition 2)]
    (is (= {20 4, 21 3, 22 2, 23 1} ranked))))

(deftest can-apply-rank
  (let [jeff (get-in c/a-competition [:competitors 0])
        r (s/apply-rank jeff 1 {20 5})]
    (is (= 5 (get-in r [:scores 1 :rank])))))

(deftest dense-ranks
  (let [r (s/dense-rank c/a-competition)]
    (pprint r)
    (is  (= "Jeff Vanlandingham" (get-in r [0 0 :name])))))

(deftest short-ranks
  (let [scores [1 1 2 3]
        ranked (s/condense scores)]
    (is (= ranked [1 1 3 4]))))

(deftest long-ranks
  (let [scores [1 1 2 3 3 4 5 5]
        ranked (s/condense scores)]
    (is (=  ranked [1 1 3 4 4 6 7 7]))))

(deftest long-ranks-2
                   ;1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
  (let [scores     [1 1 2 3 3 4 5 5 6  7  7  7  7  7  7  8]
        ranked (s/condense scores)]
    (is (=  ranked [1 1 3 4 4 6 7 7 9 10 10 10 10 10 10 16]))))

(deftest evaluation 
  (let [result (s/ev 4 4 4 5)]
    (is (= 4 result))))
