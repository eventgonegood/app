(ns app.scores-tests
  (:require [app.scores :as s]
            [clojure.pprint :refer [pprint]]
            [clojure.test :refer :all]))

(defn sample-score [name v1 v2]
  {:name name
   :scores [{:value v1}
            {:value v2}]})

(defn sample-event [event-name priority]
  {:name event-name
   :priority priority})

(def sample-scores
  [(sample-score "Jeff Vanlandingham" 20 24) 
   (sample-score "Jeremy Kampen" 21 25)
   (sample-score "Reid Reagan" 22 26)
   (sample-score "Albert Leyva" 23 27)])

(def sample-events 
  [(sample-event "Fran" :time)
   (sample-event "Grace" :task)])

(deftest can-extract-scores
  (let [extraction (s/extract-scores sample-scores 0)]
    (is extraction [20 21 22 23])))

(deftest can-rank-scores-time
  (let [scores [20 21 22 23]
        ed (sample-event "Fran" :time) ;smaller is better
        ranked (s/rank-scores scores ed)]
    (is (= {20 1, 21 2, 22 3, 23 4} ranked))))

(deftest can-rank-scores-task
  (let [scores [20 21 22 23]
        ed (sample-event "Fran" :task) ;smaller is better
        ranked (s/rank-scores scores ed)]
    (is (= {20 4, 21 3, 22 2, 23 1} ranked))))
(deftest dense-ranks
  (let [r (s/dense-rank sample-scores sample-events)]
    (pprint r)
    (is  (= "Jeff Vanlandingham" (get-in r [0 0 :name])))))

(deftest short-ranks
  (let [scores [1 1 2 3]
        ranked (s/condense scores)]
    (is (= ranked [1 1 3 4]))))

(deftest long-ranks
  (let [scores [1 1 2 3 3 4 5 5]
        ranked (s/condense scores)]
    (is ranked [1 1 3 4 4 6 7 7])))

(deftest evaluation 
  (let [result (s/ev 4 4 4 5)]
    (is 5 result)))
