(ns multi-jenk.client.main
  (:require [crate.core :as crate]
            [cljs.reader :as reader]
            [goog.net.XhrIo :as xhr])
  (:use-macros [crate.macros :only [defpartial]])
  (:use [jayq.core :only [$ append delegate data]]))

(def $jenkins ($ :#jenkins))

(defpartial job [{:strs [url color name]}]
  [:h3 [:a {:href url :class color} name]])

(defpartial jobs-list [{:strs [name jobs]}]
  [:li name
   (map job jobs)])

(defpartial servers-list [items]
  [:ul#servers
   (map jobs-list items)])

(defn showJobs [reply]
  (let [data (js->clj (.getResponseJson (.-target reply)))]
    (append $jenkins (servers-list data))))

(.send goog.net.XhrIo "/api/statuses" showJobs)
