(defproject multi-jenk "0.1.0-SNAPSHOT"
            :description "Multi-Jenk"
            :dependencies [[org.clojure/clojure "1.4.0"]
                           [noir "1.3.0-alpha10"]
                           [jayq "0.2.3"]
                           [clj-http "0.5.8"]
                           [cheshire "4.0.0"]
                           [crate "0.2.1"]]
            :dev-dependencies [[lein-ring "0.5.4"]]
            :source-paths ["src/clj"]
            :ring {:handler multi-jenk.server/handler}
            :cljsbuild {:builds
                        [{:source-path "src/cljs"
                          :compiler {:output-dir "resources/public/cljs"
                                     :output-to "resources/public/cljs/bootstrap.js"
                                     :optimizations :simple
                                     :pretty-print true}}]}
            :plugins [[lein-cljsbuild "0.2.9"]]
            :main multi-jenk.server)
