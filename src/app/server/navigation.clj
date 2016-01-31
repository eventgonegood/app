(ns app.server.navigation)

(defn build []
  [{:label "Staff" :href "/staff"}
   {:label "Members" :href "/members"}
   {:label "Plans" :href "/plans"}
   {:label "Scheduling" :href "/scheduling"}])
