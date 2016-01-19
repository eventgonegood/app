(ns app.server.navigation)


(defn build []
  [
   {:label "Staff" :href "/staff"}
   {:label "Coach" :href "/coach"}
   {:label "Athlete" :href "/athlete"}
   ]
  )
