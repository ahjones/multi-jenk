(ns multi-jenk.client.main
  (:require [crate.core :as crate]
            [cljs.reader :as reader]
            [goog.net.XhrIo :as xhr])
  (:use-macros [crate.macros :only [defpartial]])
  (:use [jayq.core :only [$ append delegate data]]))

(def $jenkins ($ :#jenkins))

(defn job-status-to-btn-class [status]
  (condp = status
    "red" "btn-danger"
    ""))

(defn job-satus-to-status-text [status]
  (condp = status
    "red" "Failed"
    "grey" "Unknown"))

(defpartial job [{:strs [url color name]}]
  [:tr
   [:td [:a {:href url} name]]
   [:td [:button {:class (job-status-to-btn-class color)} (job-satus-to-status-text color)]]])

(defpartial jobs-list [{:strs [name jobs]}]
  [:div [:h2 name] [:table.table.table-striped
                    [:thead
                     [:tr
                      [:th "Name"]
                      [:th "Status"]]]
                    (map job jobs)]])

(defpartial servers-list [items]
  [:section#results (map jobs-list items)])

(defn showJobs [reply]
  (let [data (js->clj (.getResponseJson (.-target reply)))]
    (append $jenkins (servers-list data))))

(.send goog.net.XhrIo "/api/statuses" showJobs)
