(ns app.scores)

(defn sample-score [name v1 v2]
  {:name name
   :scores [{:value v1}
            {:value v2}]})

(defn sample-event [event-name priority]
  {:name event-name
   :priority priority})

(defn extract-scores [scores index]
  (let [scores-to-rank (map #(get-in % [:scores index]) scores)
        score-values (map :value scores-to-rank)]
    score-values))
; :time sorts <
; :task sorts >
; nil value is always last
; expecting [22 23 24]
(defn rank-scores [scores-to-rank] 
  ;sort-by key-fn comparison collection
  (let [sorted-values (sort < scores-to-rank)
        distinct-sorted-values (distinct sorted-values)
        rank-tuples (map vector distinct-sorted-values (iterate inc 1))]
    (into {} (vec rank-tuples))))

(defn apply-rank [score index ranked-scores]
  (let [v (get-in score [:scores index :value])
        r (get ranked-scores v)]
   ;need to assoc in :scores index
    (assoc-in score [:scores index :rank] r)))

(defn walk-scores [scores event-index event-def]
  (let [priority (:priority event-def)
        score-vals (extract-scores scores event-index)
        ranks (rank-scores score-vals)]
    ;inner-walk-scores
    ;   apply-rank
))

(defn- inner-walk-event [event-index event-count event-defs scores]
  ;needs to recur to get all events
  (let [event-def (get event-defs event-index)]
    (walk-scores scores event-index event-def)))

(defn walk-events [event-defs scores]
  (let [event-count (count event-defs)]
    (inner-walk-event 0 event-count event-defs scores)))

;1,1,3,4,4,6
(defn sparse-rank [event-defs scores]
  (let [entry-count (count scores)
        event-count (count event-defs)]))

;1,1,2,3,3,4
(defn dense-rank [scores event-def]
  (let [entry-count (count scores)
        event-count (count event-def)]))

;values are the identity
;extract the values
;rank them, then assign the rank back to the value

(def sample-scores
  [(sample-score "Jeff Vanlandinghame" 22 450) 
   (sample-score "Jeremy Kampen" 20 225)
   (sample-score "Reid Reagan" 20 235)
   (sample-score "Albert" 21 135)])

(def sample-events 
  [(sample-event "Fran" :time)
   (sample-event "Grace" :time)])

(def extracted-scores (extract-scores sample-scores 0))
(def ranked-scores (rank-scores extracted-scores))
(dense-rank ranked-scores sample-scores)
(sparse-rank ranked-scores sample-scores)
(apply-rank (sample-score "abc" 20 225) 0 ranked-scores)
