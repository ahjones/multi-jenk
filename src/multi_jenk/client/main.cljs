(ns multi-jenk.client.main
  (:require [crate.core :as crate]
            [cljs.reader :as reader]
            [goog.net.XhrIo :as xhr])
  (:use-macros [crate.macros :only [defpartial]])
  (:use [jayq.core :only [$ append delegate data]]))

(def $jenkins ($ :#jenkins))

(defpartial job [item]
  [:h3 [:a {:href ("url" item)} ("name" item)]])

(defpartial jobs-list [jobs]
  [:li ("name" jobs)
   (map job ("jobs" jobs))])

(defpartial servers-list [items]
  [:ul#servers
   (map jobs-list items)])

(defn showJobs [reply]
  (let [data (js->clj (.getResponseJson (.-target reply)))]
    (append $jenkins (servers-list data))))

(.send goog.net.XhrIo "/api/statuses" showJobs)
