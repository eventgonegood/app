(ns app.competitions.competitions
(:require [com.rpl.specter :as s]
          [app.util :refer [by-id]]
          ))

(defn new-division [name description]
  {
   :id 0
   :name name
   :description description
   }
  )

(defn new-measure [name description sort conversion-factor]
  {:id 0
   :name name
   :description description
   :sort sort
   :conversion-factor conversion-factor})

(defn new-event [name priority division]
  {:id 0
   :name name
   :division-id division
   :priority priority
   :measures []
   }
  )

(defn new-competition [name]
  {
   :name name
   :competitors []
   :divisions []
   :events []
   }
  )

(defn new-competitor [name gym division]
  {:id 0
   :name name
   :gym gym 
   :division-id division
   :scores {}})

(defn add-score [competition competitor-id event-id score]
  (s/transform [:competitors s/ALL #(= (:id %) competitor-id) :scores]
               #(assoc % event-id score)
               competition
               ))

(defn add-division [competition division]
  (let [ids (s/select [:divisions s/ALL :id] competition)
        max-key (if (empty? ids) 0 (apply max ids))
        division-with-id (assoc division :id (inc max-key))]
    (update-in competition [:divisions] #(conj % division-with-id))))

(defn add-event [competition event-def]
  (let [ids (s/select [:events s/ALL :id] competition)
        max-key (if (empty? ids) 0 (apply max ids))
        event-def-with-id (assoc event-def :id (inc max-key))]
    (update-in competition [:events] #(conj % event-def-with-id))))

(defn add-measure [event-def measure]
 (let [ids (s/select [:measures s/ALL :id] event-def)
       max-key (if (empty? ids) 0 (apply max ids))
       measure-with-id (assoc measure :id (inc max-key))]
   (update-in event-def [:measures] #(conj % measure-with-id))))

(defn add-competitor [competition competitor]
  (let [ids (s/select [:competitors s/ALL :id] competition)
        max-key (if (empty? ids) 0  (apply max ids))
        competitor-with-id (assoc competitor :id (inc max-key))]
    (update-in competition [:competitors] #(conj % competitor-with-id))))

(defn get-event [competition event-key]
  (first  (s/select [:events s/ALL (by-id event-key)] competition)))

(def a-competition (-> 
                  (new-competition "Fittest Games")

                  (add-division (new-division "Mens Rx" "")) ;1

                  (add-competitor (new-competitor "Jeff Vanlandingham" "CrossFit Jaakarhu" 1)) ;1
                  (add-competitor (new-competitor "Reid Reagan" "CrossFit Jaakarhu" 1)) ;2
                  (add-competitor (new-competitor "Albert Leyva" "CrossFit Dallas Central" 1)) ;3
                  (add-competitor (new-competitor "Jeremy Kampen" "CrossFit Jaakarhu" 1)) ;4

                  (add-event (->
                               (new-event "Fran" :task 1)
                               (add-measure (new-measure "Reps" "Total Reps" :task 1)))) ;1
                  (add-event (->
                                (new-event "Cindy" :time 1)
                                (add-measure (new-measure "Reps" "Total Reps" :task 1)))) ;2

                  ;athlete-id event-id
                  (add-score 1 1 {:value 20 :uom :sec})
                  (add-score 2 1 {:value 21 :uom :sec})
                  (add-score 3 1 {:value 22 :uom :sec})
                  (add-score 4 1 {:value 23 :uom :sec})

                  (add-score 1 2 {:value 20 :uom :reps})
                  (add-score 2 2 {:value 21 :uom :reps})
                  (add-score 3 2 {:value 22 :uom :reps})
                  (add-score 4 2 {:value 23 :uom :reps})))
