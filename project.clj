(defproject app "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[buddy "0.8.3"]
                 [abengoa/clj-stripe "1.0.4"]
                 [cheshire "5.5.0"]
                 [com.stuartsierra/component "0.3.0"]
                 [compojure "1.4.0"]
                 [duct "0.5.6"]
                 [environ "1.0.1"]
                 [enlive "1.1.6"]
                 [meta-merge "0.1.1"]
                 [org.clojure/clojure "1.7.0"]
                 [org.postgresql/postgresql "9.4-1201-jdbc41"]
                 [org.slf4j/slf4j-nop "1.7.12"]
                 [org.webjars/normalize.css "3.0.2"]
                 [ragtime "0.5.2"]
                 [ring "1.4.0"]
                 [ring-jetty-component "0.3.0"]
                 [ring-webjars "0.1.1"]
                 [ring/ring-defaults "0.1.5"]
                 [yesql "0.5.1"]]
  :plugins [[lein-environ "1.0.1"]
            [lein-ancient "0.6.8"]
            [lein-cljfmt "0.3.0"]
            [lein-marginalia "0.8.0"]
            [lein-gen "0.2.2"]]
  :generators [[duct/generators "0.5.6"]]
  :duct {:ns-prefix app}
  :main ^:skip-aot app.main
  :target-path "target/%s/"
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
   :project/test  {}})
