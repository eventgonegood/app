(ns app.events)

(defn log [type content actions]
  {:type type
   :content content
   :actions actions})

(defn needs-to-pay-log [id name amount]
  (log :financial (str name " owes " amount) ["Send Email"]))
