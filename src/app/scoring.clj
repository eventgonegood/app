(ns app.scoring
  (:require [clojure.pprint :refer [pprint]]
            [com.rpl.specter :as s]
            [app.competitions :as c]
            [clojure.set :as set]))

(defn extract-scores 
  "Given a competition will extract a vector of values from an event key"
  [competition event-key]
  (let [scores (s/select [:competitors s/ALL :scores (s/keypath event-key) :value] competition)]
    scores))

; :time sorts <
; :task sorts >
; nil value is always last
(defn rank-scores 
  "Given a competition and an event definition key will return a dense 
   ranked value in the form of a dictionary {score rank, score rank}"
  [competition event-def-key] 
  (let [event-def (get-in competition [:events event-def-key])
        sorter (if (= :time (:priority event-def)) < >)
        scores-to-rank (extract-scores competition event-def-key)
        sorted-values (sort sorter scores-to-rank)
        distinct-sorted-values (distinct sorted-values)
        rank-tuples (map vector distinct-sorted-values (iterate inc 1))]
    (into {} rank-tuples)))

(defn apply-rank 
  "Given an competitor entry, the index of the event, and the rankings
   this will assoc :rank onto the value object.
   score  {:name 'dru' :scores {1 {:value 22 }}}
   output {:name 'dru' :scores {1 {:value 22 :rank 4 }}}"
  [competitor event-key ranked-scores]
  (let [v (get-in competitor [:scores event-key :value])
        r (get ranked-scores v)]
    ;need to assoc in :scores index
    (assoc-in competitor [:scores event-key :rank] r)))

(defn sparse-rank 
  "Sparse rank returns ranked scores in the ranking format of [1 1 3 4 4 6]"
  [event-defs scores]
  (let [entry-count (count scores)
        event-count (count event-defs)]
    "sparse"))

(defn dense-rank 
  "Dense rank returnes ranked scores in the ranking format of [1 1 2 3 3 4]"
  [competition]
  (let [events (:events competition)]
     (mapv (fn [event-def]
            (let [ranked-scores (rank-scores competition (:id event-def))]
              (mapv (fn [competitor]
                        (apply-rank competitor (:id event-def) ranked-scores)) 
                        (:competitors competition)))) events)))

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
