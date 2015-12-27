(ns app.scores-tests
  (:require [app.scores :as s]
            [clojure.pprint :refer [pprint]]
            [app.leaderboard :as l]
            [clojure.test :refer :all]))

(def competition (-> 
                  (l/new-competition "Fittest Games" [])
                  (l/add-competitor (l/new-competitor "Jeff Vanlandingham" "CrossFit Jaakarhu")) ;1
                  (l/add-competitor (l/new-competitor "Reid Reagan" "CrossFit Jaakarhu")) ;2
                  (l/add-competitor (l/new-competitor "Albert Leyva" "CrossFit Dallas Central")) ;3
                  (l/add-competitor (l/new-competitor "Jeremy Kampen" "CrossFit Jaakarhu")) ;4

                  (l/add-event (l/new-event "Fran" :time)) ;1
                  (l/add-event (l/new-event "Cindy" :task)) ;2

                  ;athlete-id event-id
                  (l/add-score 1 1 {:value 20 :uom :sec})
                  (l/add-score 2 1 {:value 21 :uom :sec})
                  (l/add-score 3 1 {:value 22 :uom :sec})
                  (l/add-score 4 1 {:value 23 :uom :sec})

                  (l/add-score 1 2 {:value 20 :uom :reps})
                  (l/add-score 2 2 {:value 21 :uom :reps})
                  (l/add-score 3 2 {:value 22 :uom :reps})
                  (l/add-score 4 2 {:value 23 :uom :reps})))

(deftest can-extract-scores
  (let [extraction (s/extract-scores competition 1)]
    (is (= extraction [20 21 22 23]))))

(deftest can-rank-scores-time
  (let [ranked (s/rank-scores competition 1)]
    (is (= {20 1, 21 2, 22 3, 23 4} ranked))))

(deftest can-rank-scores-task
  (let [ranked (s/rank-scores competition 2)]
    (is (= {20 4, 21 3, 22 2, 23 1} ranked))))

(deftest can-apply-rank
  (let [jeff (get-in competition [:competitors 1])
        r (s/apply-rank jeff 1 {20 5})]
    (is (= 5 (get-in r [:scores 1 :rank])))))

(deftest can-rank-scores-task
  (let [scores [20 21 22 23]
        ed (l/new-event "Fran" :task) ;smaller is better
        ranked (s/rank-scores scores ed)]
    (is (= {20 4, 21 3, 22 2, 23 1} ranked))))

(deftest dense-ranks
  (let [r (s/dense-rank competition)]
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
