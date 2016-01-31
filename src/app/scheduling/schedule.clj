(ns app.scheduling.schedule
  (:require
   [aggregate.core :as agg]
   [yesql.core :refer [defqueries]]))

(defqueries "sql/scheduling.sql")

(defn convert [row]
  (as-> row $
    (assoc $ :day_of_week (keyword (.getValue (:day_of_week $))))
    )
  )
(def days-of-week [:monday :tuesday :wednesday :thursday :friday :saturday :sunday])

(defn weekly [db organization_id]
  (let [raw-values (sql-gym-schedule {:organization_id organization_id} {
                                                                 :connection db
                                                                 :row-fn convert
                                                                 })
        ;day_of_week, class, title, start_at, end_at, duration
        ;group by day of week, class {:day_of_week
        ;classes (map #({(:class $) []}) raw-values)
        ;init-struct (map (fn [dow] {dow (mapv (fn [c] {:class c :times []}) classes)}) days-of-week)
        ; {:monday [{:class "name" :times []},{}]}
        ;processed (map (fn [row] ) raw-values)
        ]

        {:dow-layout [:sunday :monday :tuesday :wednesday :thursday :saturday]
         :classes raw-values }
    ))
