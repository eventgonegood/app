(ns app.meta-tests
  (:require [meta-merge.core :refer [meta-merge]]
            [clojure.pprint :refer [pprint]]
            [environ.core :refer [env]]
            [clojure.test :refer :all]))

(def defaults 
  ^:displace {:http {:port 5000 :host "localhost" :a {:b "dru"}}})

(def enva
  {:http {:port nil}})

(defn x [] (meta-merge enva defaults))

(pprint (x))

(merge enva defaults)

(some-> env :porta Integer.)
