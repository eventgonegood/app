(ns user
  (:require [clojure.repl :refer :all]
            [clojure.pprint :refer [pprint]]
            [clojure.tools.namespace.repl :refer [refresh]]
            [clojure.java.io :as io]
            [com.stuartsierra.component :as component]
            [eftest.runner :as eftest]
            [meta-merge.core :refer [meta-merge]]
            [reloaded.repl :refer [system init start stop go reset]]
            [ring.middleware.stacktrace :refer [wrap-stacktrace]]
            [app.config :as config]
            [app.system :as system]))

(def dev-config
  {:app {:middleware [wrap-stacktrace]}

   :connection {:classname "org.postgresql.Driver"
                :subprotocol "postgresql"
                :subname "//localhost:5432/egg"
                :user "egg"}  
   })

(def config
  (meta-merge config/defaults
              config/environ
              dev-config))

(defn new-system []
  (into (system/new-system config)
        {}))

(ns-unmap *ns* 'test)

(defn test []
  (eftest/run-tests (eftest/find-tests "test") {:multithread? false}))

(when (io/resource "local.clj")
  (load "local"))

(reloaded.repl/set-init! new-system)
;;the above adds the following commands
;;- (init) - creates system map
;;- (start) - starts the system, must init first
;;- (stop) - stops the system
;;- (go) - runs init then start
;;- (reset) - suspend then refresh (update clojure code / hot relead)  then resume
;;- (suspend) - will suspend the components, if they don't support that it will stop them
;;- (resume) - will resume the components, if they don't support that it will start them

