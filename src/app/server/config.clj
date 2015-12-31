(ns app.server.config
  (:require [environ.core :refer [env]]
            [clojure.walk :refer [postwalk]]))

;not really sure what to put here yet.
;everything I have is user provisioned
(def defaults
  ^:displace {})

;;env pulls from .lein-env / env var / java system properties
;;profiles.clj gets transformed into .lein-env
;;profiles.clj should NOT be checked into source control
;;lein-environ plugin dumps the :env key of project.clj to .lien-env
;;we can activate different profiles by saying `lein with-profile ABC test`
(def environ
  {:http {:port (some-> env :port Integer.)
          :host (some-> env :host)}
   :database {:connection-uri (some-> env :database-url)}})

(defn remove-nils
  "remove pairs of key-value that has nil value from a (possibly nested) map. also transform map to nil if all of its value are nil" 
  [nm]
  (postwalk 
   (fn  [el]
     (if  (map? el)
       (let  [m  (into  {}  (remove  (comp nil? second) el))]
         (when  (seq m)
           m))
       el))
   nm))
