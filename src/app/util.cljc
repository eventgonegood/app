(ns app.util
 (:require  
            [com.rpl.specter :as s]
            [com.rpl.specter.macros :as d]
            [com.rpl.specter.protocols :as p]))


(defn by-id 
  "A helper function for the specter library"
  [id]
  (fn [v]
    (= (:id v) id)))

(d/defpath ALL2 []
  (select* [this structure next-fn]
    (doall (mapcat next-fn structure))
    )
  (transform* [this structure next-fn]
    (mapv next-fn structure)
    )) 

(defn trim-request [request]
  (->
   request
   (assoc ,,, :__trimed true)
   (update-in ,,, [:cookies] dissoc "_hu-cache_session")
   (update-in ,,, [:cookies] dissoc "_ga")
   (update-in ,,, [:cookies] dissoc "ajs_anonymous_id")
   (update-in ,,, [:cookies] dissoc "ajs_user_id")
   (update-in ,,, [:cookies] dissoc "ajs_group_id")
   (dissoc ,,, :async-channel)
   (update-in ,,, [:headers] dissoc "cookie")))  
