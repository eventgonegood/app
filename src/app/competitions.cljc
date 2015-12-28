(ns app.competitions
(:require [com.rpl.specter :as s]
          ))

(defn new-event [name priority]
  {:id 0
   :name name
   :priority priority
   }
  )

(defn new-competition [name]
  {
   :name name
   :competitors []
   :events []
   }
  )

(defn new-competitor [name gym]
  {:id 0
   :name name
   :gym gym 
   :scores {}})

(defn add-score [competition competitor-id event-id score]
  (s/transform [:competitors s/ALL #(= (:id %) competitor-id) :scores]
               #(assoc % event-id score)
               competition
               ))

(defn add-event [competition event-def]
  (let [ids (s/select [:events s/ALL :id] competition)
        max-key (if (empty? ids) 0 (apply max ids))
        event-def-with-id (assoc event-def :id (inc max-key))]
    (update-in competition [:events] #(conj % event-def-with-id))))


(defn add-competitor [competition competitor]
  (let [ids (s/select [:competitors s/ALL :id] competition)
        max-key (if (empty? ids) 0  (apply max ids))
        competitor-with-id (assoc competitor :id (inc max-key))]
    (update-in competition [:competitors] #(conj % competitor-with-id))))

(defn by-id [id] (fn [v]
                  (= (:id v) id)))

(defn get-event [competition event-key]
  (first  (s/select [:events s/ALL (by-id event-key)] competition)))

(def a-competition (-> 
                  (new-competition "Fittest Games")
                  (add-competitor (new-competitor "Jeff Vanlandingham" "CrossFit Jaakarhu")) ;1
                  (add-competitor (new-competitor "Reid Reagan" "CrossFit Jaakarhu")) ;2
                  (add-competitor (new-competitor "Albert Leyva" "CrossFit Dallas Central")) ;3
                  (add-competitor (new-competitor "Jeremy Kampen" "CrossFit Jaakarhu")) ;4

                  (add-event (new-event "Fran" :time)) ;1
                  (add-event (new-event "Cindy" :task)) ;2

                  ;athlete-id event-id
                  (add-score 1 1 {:value 20 :uom :sec})
                  (add-score 2 1 {:value 21 :uom :sec})
                  (add-score 3 1 {:value 22 :uom :sec})
                  (add-score 4 1 {:value 23 :uom :sec})

                  (add-score 1 2 {:value 20 :uom :reps})
                  (add-score 2 2 {:value 21 :uom :reps})
                  (add-score 3 2 {:value 22 :uom :reps})
                  (add-score 4 2 {:value 23 :uom :reps})))
#_(pprint  a-competition)
