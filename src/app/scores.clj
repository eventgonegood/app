(ns app.scores)

(defn sample-score [name v1 v2]
  {
   :name name
   :scores [
            {:priority :time
             :value v1
             }
            {
             :priority :task
             :value v2
             }
            {
             :priority :time
             :value nil
             }
            ]
   }
  )

; :time sorts <
; :task sorts >
; nil value is always last
(defn rank [scores index]
  ;sort-by key-fn comparison collection
  (let [scores-to-rank (map #(get-in % [:scores index]) scores)]
    (sort-by :value > scores-to-rank)  
    )
  )


(defn sample-scores []
  [(sample-score "Jeff Vanlandinghame" 22 450) (sample-score "Jeremy Kampen" 20 225)])

(sample-scores)
(rank (sample-scores) 0)
