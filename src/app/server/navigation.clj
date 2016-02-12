(ns app.server.navigation)

(defn build []
  [{:label "Staff" :href "/staff"}
   {:label "Membership" :href "/membership"}
   {:label "Plans" :href "/plans"}
   {:label "Scheduling" :href "/scheduling"}])
