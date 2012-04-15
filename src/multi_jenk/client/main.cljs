(ns multi-jenk.client.main
  (:require [crate.core :as crate]
            [cljs.reader :as reader]
            [goog.net.XhrIo :as xhr]
            [goog.dom :as dom])
  (:use-macros [crate.macros :only [defpartial]])
  (:use [jayq.core :only [$ empty append delegate data text]]))

(def $jenkins ($ :#jenkins))

(def job-filter (atom ""))

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
  [:div.span8 [:h2 name] [:table.table.table-striped
                    [:thead
                     [:tr
                      [:th.span6 "Name"]
                      [:th "Status"]]]
                    (map job (filter #(<= 0 ( .indexOf (.toLowerCase ("name" %))
                                                       (.toLowerCase @job-filter))) jobs))]])

(defpartial servers-list [items]
  [:section#results (map jobs-list items)])

(defn showJobs [reply]
  (empty $jenkins)
  (let [data (js->clj (.getResponseJson (.-target reply)))]
    (append $jenkins (servers-list data))))

(delegate ($ :body) "#jobname" :keyup
          (fn [e]
            (.preventDefault e)
            (swap! job-filter (fn [x] (.-value (.-target e))))
            (go)))

(defn storage-put [key value]
  (.setItem (.-localStorage (dom/getWindow)) key value))

(defn storage-get [key]
  (.getItem (.-localStorage (dom/getWindow)) key))

(defn go []
  (.send goog.net.XhrIo "/api/statuses" showJobs))

;(storage-put "andrew" "jones")
;(.log js/console (storage-get "andrew"))

(go)
