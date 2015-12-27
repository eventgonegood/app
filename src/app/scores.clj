(ns app.scores (:require [clojure.pprint :refer [pprint]]
                         [clojure.set :as set]))

(defn extract-scores 
  "Given a competition will extract a vector of values from an event key"
  [competition event-key]
  (let [scores-to-rank (map #(get-in % [:scores event-key]) (vals (:competitors  competition)))
        score-values (map :value scores-to-rank)]
    score-values))

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
  "Given an athlete entry, the index of the event, and the rankings
   this will assoc :rank onto the value object.
   score  {:name 'dru' :scores {1 {:value 22 }}}
   output {:name 'dru' :scores {1 {:value 22 :rank 4 }}}"
  [athlete index ranked-scores]
  (let [v (get-in athlete [:scores index :value])
        r (get ranked-scores v)]
    ;need to assoc in :scores index
    (assoc-in athlete [:scores index :rank] r)))

(defn sparse-rank 
  "Sparse rank returns ranked scores in the ranking format of [1 1 3 4 4 6]"
  [event-defs scores]
  (let [entry-count (count scores)
        event-count (count event-defs)]))

(defn dense-rank 
  "Dense rank returnes ranked scores in the ranking format of [1 1 2 3 3 4]"
  [competition]
  (let [events (:events competition)]
    (vec 
     (map (fn [event-def-key]
            (let [event-def (get-in competition [:events event-def-key]) 
                  ranks (rank-scores competition event-def-key)]
              (mapv (fn [competitor]
                      (let [c (get competitor 1)]
                        (apply-rank c event-def-key ranks))) (:competitors competition)))) (keys  events)))))

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
