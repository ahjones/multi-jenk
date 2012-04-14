(ns multi-jenk.client.main
  (:require [crate.core :as crate]
            [cljs.reader :as reader]
            [goog.net.XhrIo :as xhr])
  (:use [jayq.core :only [$ append delegate data]]))

(def $jenkins ($ :#jenkins))

(def $body ($ :body))

(defn callback [reply]
  ;(.log js/console "hi")
  (let [servers (js->clj (.getResponseJson (.-target reply)))]
    (doseq [job ("jobs" (get servers 0))] (append $jenkins (crate/html [:p ("name" job)])))))

(.send goog.net.XhrIo "/api/statuses" callback)
