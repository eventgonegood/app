(ns app.util)


(defn by-id 
  "A helper function for the specter library"
  [id]
  (fn [v]
    (= (:id v) id)))
