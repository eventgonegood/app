(ns app.config
  (:require [environ.core :refer [env]]))

(def defaults
  ^:displace {:http {:port 5000}})

;;env pulls from .lein-env / env var / java system properties
;;profiles.clj gets transformed into .lein-env
(def environ
  {:http {:port (some-> env :port Integer.)}})

