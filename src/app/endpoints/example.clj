(ns app.endpoints.example
  (:require [compojure.core :refer :all]
            [cheshire.core :refer :all]
            [clojure.pprint :refer [pprint]]
            [app.accounts.organizations :as act]
            [clojure.java.io :as io]))

;;config will contain the component items
(defn example-endpoint [config]
  (context "/example" []
    (GET "/" []
      (io/resource "app/endpoint/example/example.html"))
    (GET "/cfg" []
      (pprint config)
      (let [u (act/find (get-in [:accounts :connection] config) "drusellers")]
        (generate-string u)))))

