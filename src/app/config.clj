(ns app.config
  (:require [environ.core :refer [env]]))

(def defaults
  ^:displace {:http {:port 5000}})

;;env pulls from .lein-env / env var / java system properties
;;profiles.clj gets transformed into .lein-env
;;profiles.clj should NOT be checked into source control
;;lein-environ plugin dumps the :env key of project.clj to .lien-env
;;we can activate different profiles by saying `lein with-profile ABC test`
(def environ
  {:http {:port (some-> env :port Integer.)}})

