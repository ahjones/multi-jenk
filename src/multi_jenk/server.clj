(ns multi-jenk.server
  (:require [noir.server :as server]
            [multi-jenk.views.welcome]))

;;(server/load-views "src/multi_jenk/views/")

(def handler (server/gen-handler {:mode :dev :ns 'multi-jenk}))

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8080"))]
    (server/start port {:mode mode
                        :ns 'multi-jenk})))

