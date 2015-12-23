(ns app.scores (:require [clojure.pprint :refer [pprint]]
                         [clojure.set :as set]))

(defn extract-scores [scores index]
  (let [scores-to-rank (map #(get-in % [:scores index]) scores)
        score-values (map :value scores-to-rank)]
    score-values))

; :time sorts <
; :task sorts >
; nil value is always last
; expecting [22 23 24]
(defn rank-scores [scores-to-rank event-def] 
  ;sort-by key-fn comparison collection
  (let [sorter (if (= :time (:priority event-def)) < >)
        sorted-values (sort sorter scores-to-rank)
        distinct-sorted-values (distinct sorted-values)
        rank-tuples (map vector distinct-sorted-values (iterate inc 1))]
    (into {} (vec rank-tuples))))

(defn apply-rank [score index ranked-scores]
  (let [v (get-in score [:scores index :value])
        r (get ranked-scores v)]
    ;need to assoc in :scores index
    (assoc-in score [:scores index :rank] r)))

;1,1,3,4,4,6
(defn sparse-rank [event-defs scores]
  (let [entry-count (count scores)
        event-count (count event-defs)]))

;1,1,2,3,3,4
(defn dense-rank [scores event-defs]
  (map-indexed (fn [i event-def]
                 (let [priority (:priority event-def)
                       score-vals (extract-scores scores i)
                       ranks (rank-scores score-vals event-def)]
                   (map (fn [score]
                          (apply-rank score i ranks)) scores))) event-defs))

;values are the identity
;extract the values
;rank them, then assign the rank back to the value

(defn sample-score [name v1 v2]
  {:name name
   :scores [{:value v1}
            {:value v2}]})

(defn sample-event [event-name priority]
  {:name event-name
   :priority priority})

(def sample-scores
  [(sample-score "Jeff Vanlandingham" 20 20) 
   (sample-score "Jeremy Kampen" 21 21)
   (sample-score "Reid Reagan" 22 22)
   (sample-score "Albert Leyva" 23 23)])

(def sample-events 
  [(sample-event "Fran" :time)
   (sample-event "Grace" :task)])

(dense-rank sample-scores sample-events)
(sparse-rank sample-scores  sample-events)

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

