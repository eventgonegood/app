(ns app.scores (:require [clojure.pprint :refer [pprint]]
                         [clojure.set :as set]))

(defn extract-scores 
  "Given a sequence of scores will extract a vector of values"
  [scores index]
  (let [scores-to-rank (map #(get-in % [:scores index]) scores)
        score-values (map :value scores-to-rank)]
    score-values))

; :time sorts <
; :task sorts >
; nil value is always last
; expecting [22 23 24]
(defn rank-scores 
  "Given a vector of scores and an event definition will return a dense 
   ranked value in the form of a dictionary {score rank, score rank}"
  [scores-to-rank event-def] 
  ;sort-by key-fn comparison collection
  (let [sorter (if (= :time (:priority event-def)) < >)
        sorted-values (sort sorter scores-to-rank)
        distinct-sorted-values (distinct sorted-values)
        rank-tuples (map vector distinct-sorted-values (iterate inc 1))]
    (into {} (vec rank-tuples))))

(defn apply-rank 
  "Given an athletes scores, the index of the event, and the rankings
   this will assoc :rank onto the value object.
   {:value 22} -> {:value 22 :rank 4}"
  [score index ranked-scores]
  (let [v (get-in score [:scores index :value])
        r (get ranked-scores v)]
    ;need to assoc in :scores index
    (assoc-in score [:scores index :rank] r)))

(defn sparse-rank 
  "Sparse rank returns ranked scores in the ranking format of [1 1 3 4 4 6]"
  [event-defs scores]
  (let [entry-count (count scores)
        event-count (count event-defs)]))

(defn dense-rank 
  "Dense rank returnes ranked scores in the ranking format of [1 1 2 3 3 4]"
  [scores event-defs]
  (vec 
   (map-indexed (fn [i event-def]
                  (let [priority (:priority event-def)
                        score-vals (extract-scores scores i)
                        ranks (rank-scores score-vals event-def)]
                    (mapv (fn [score]
                            (apply-rank score i ranks)) scores))) event-defs)))

;values are the identity
;extract the values
;rank them, then assign the rank back to the value

(defn merge-scores [a b]
  (let [a-scores (:scores a)
        b-scores (:scores b)
        merged (into [] (set/join a-scores b-scores))]
    (assoc a :scores merged)))

(defn xxx [a]
  (apply merge-scores a))

(map xxx (list (list {:name "A" :scores [{:v 2 :r 1} {:v 3} {:v 4}]} {:name "A" :scores [{:v 2} {:v 3 :r 2} {:v 4}]}) 
               #_(list {:name "B" :scores [{:v 3 :r 2} {:v 4}]} {:name "B" :scores [{:v 3} {:v 4 :r 1}]})))

(defn ev [last-actual-value current-actual-value last-ev-value index]
  (if (nil? current-actual-value)
    (if (< last-actual-value index)
      index
      last-actual-value)

    (if (and (not= current-actual-value last-actual-value) (< current-actual-value index))
      index
      last-ev-value)))

(defn condense [scores]
  (loop [acc [], index 1, last-item (first scores), last-ev 1, scores scores]
    (if (empty? scores) 
      acc
      (let [cur (first scores)
            next-index (inc index)
            choice (ev last-item cur last-ev index)]
        (recur (conj acc choice) next-index cur choice (rest scores))))))
