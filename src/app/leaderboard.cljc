(ns app.leaderboard)

(defn new-event [name priority]
  {:name name
   :priority priority
   }
  )

(defn add-event [competition event-def]
  (let [events (:events competition)
        k (keys events)
        max-key (if (= nil k) 0 (apply max k))]
    (update-in competition [:events] #(conj % [(inc max-key) event-def]))))

(defn new-competition [name event-defs]
  {
   :name name
   :competitors {}
   :events (apply hash-map  (map-indexed #({%1 %2}) event-defs))
   }
  )

(defn new-competitor [name gym]
  {:name name
   :gym gym 
   :scores {}})

(defn add-score [competition competitor-id event-id score]
  (assoc-in competition [:competitors competitor-id :scores event-id] score))

(defn add-competitor [competition competitor]
  (let [competitors (:competitors competition)
        k (keys competitors)
        max-key (if (= nil k) 0 (apply max k))]
    (update-in competition [:competitors] #(conj % [(inc max-key) competitor]))))

(-> 
  (new-competition "fittest games" [])
  (add-competitor (new-competitor "Jeff Vanlandingham" "CrossFit Jaakarhu"))
  (add-event (new-event "Fran" :time))

  ;time passes
  (add-score 1 1 {:value 43 :uom :sec})
  (add-score 1 2 {:value 43 :uom :sec}))

