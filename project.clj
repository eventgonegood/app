(defproject app "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[buddy "0.8.3"]
                 [abengoa/clj-stripe "1.0.4"]
                 [cheshire "5.5.0"]
                 [com.rpl/specter "0.9.0"]
                 [com.stuartsierra/component "0.3.1"]
                 [compojure "1.4.0"]
                 [devcards "0.2.1-2"]
                 [duct "0.5.6"]
                 [environ "1.0.1"]
                 [enlive "1.1.6"]
                 [http-kit "2.1.19"]
                 [meta-merge "0.1.1"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [cljsjs/react "0.14.3-0"]
                 [cljsjs/react-dom "0.14.3-1"]
                 [cljsjs/react-dom-server "0.14.3-0"]
                 [org.clojure/data.json "0.2.6"]
                 [org.omcljs/om "0.9.0"]
                 [org.postgresql/postgresql "9.4.1207"]
                 [org.slf4j/slf4j-nop "1.7.13"]
                 [org.webjars/normalize.css "3.0.2"]
                 [prismatic/schema "1.0.4"]
                 [ragtime "0.5.2"]
                 [ring "1.4.0"]
                 [ring-jetty-component "0.3.0"]
                 [ring-webjars "0.1.1"]
                 [ring/ring-defaults "0.1.5"]
                 [sablono "0.5.3"]
                 [yesql "0.5.1"]]
  :plugins [[lein-environ "1.0.1"]
            [jonase/eastwood "0.2.3"]
            [lein-figwheel "0.5.0-2" :exclusions  [org.clojure/clojure]]
            [lein-ancient "0.6.8" :exclusions  [org.clojure/clojure]]
            [lein-cljsbuild "1.1.2"]
            [lein-cljfmt "0.3.0" :exclusions  [org.clojure/clojure]]
            [lein-marginalia "0.8.0"]]
  :main ^:skip-aot app.server.main
  :target-path "target/%s/"
  :clean-targets ^{:protect false}  ["resources/app/public/js/compiled"
                                     "target"]
  :aliases {"gen"   ["generate"]
            "setup" ["do" ["generate" "locals"]]}
  :profiles
  {:dev  [:project/dev  :profiles/dev]
   :test [:project/test :profiles/test]
   :uberjar {:aot :all}
   :profiles/dev  {}
   :profiles/test {}
   :project/dev   {:dependencies [[reloaded.repl "0.2.1"]
                                  [org.clojure/tools.namespace "0.2.11"]
                                  [org.clojure/tools.nrepl "0.2.12"]
                                  [eftest "0.1.0"]
                                  [kerodon "0.7.0"]]
                   :source-paths ["dev"]
                   :repl-options {:init-ns user}}
   :project/test  {}}

  :cljsbuild  {
               :builds  [{:id "devcards"
                          :source-paths  ["src"]
                          :figwheel  { :devcards true } ;; <- note this
                          :compiler  { :main       "app.dev-cards.core"
                                      :asset-path "js/compiled/devcards_out"
                                      :output-to  "resources/app/public/js/compiled/demo_devcards_devcards.js"
                                      :output-dir "resources/app/public/js/compiled/devcards_out"
                                      :source-map-timestamp true}}
                         ]
               }
  :figwheel  {:http-server-root "app/public"
              :css-dirs  ["resources/app/public/css"]})
