(ns multi-jenk.client.main
  (:require [crate.core :as crate]
            [cljs.reader :as reader]
            [goog.net.XhrIo :as xhr])
  (:use-macros [crate.macros :only [defpartial]])
  (:use [jayq.core :only [$ append delegate data]]))

(def $jenkins ($ :#jenkins))

(defpartial job [item]
  [:a {:href ("url" item)} ("name" item)])

(defpartial server [jobs]
  [:li ("name" jobs)
   (map job ("jobs" jobs))])

(defpartial servers [items]
  [:ul#servers
   (map server items)])

(defn showJobs [reply]
  (let [data (js->clj (.getResponseJson (.-target reply)))]
    (append $jenkins (servers data))))

(defn callback [reply]
  ;(.log js/console "hi")
  (let [servers (js->clj (.getResponseJson (.-target reply)))]
    (doseq [job ("jobs" (get servers 0))] (append $jenkins (crate/html [:p ("name" job)])))))

(.send goog.net.XhrIo "/api/statuses" showJobs)
