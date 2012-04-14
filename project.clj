(defproject multi-jenk "0.1.0-SNAPSHOT"
            :description "Multi-Jenk"
            :dependencies [[org.clojure/clojure "1.3.0"]
                           [noir "1.3.0-alpha10"]
                           [clj-http "0.3.6"]
                           [cheshire "4.0.0"]
                           [crate "0.1.0-alpha3"]]
            :cljsbuild {:source-path "src"
                        :compiler
                        {:output-dir "resources/public/cljs"
                         :output-to "resources/public/cljs/bootstrap.js"
                         :optimizations :simple
                         :pretty-print true}}
            :plugins [[lein-cljsbuild "0.1.7"]]
            :main multi-jenk.server)

