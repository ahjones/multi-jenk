(ns multi-jenk.client.main
  (:require [crate.core :as crate]
            [cljs.reader :as reader]
            [goog.net.XhrIo :as xhr]
            [goog.dom :as dom])
  (:use-macros [crate.macros :only [defpartial]])
  (:use [jayq.core :only [$ empty append delegate data text]]))

(def $jenkins ($ :#jenkins))

(def job-filter (atom ""))
(def jobs (atom {}))
(def servers (atom {}))

(defn job-status-to-btn-class [status]
  (condp = status
    "red" "label-important"
    "blue" "label-success"
    ""))

(defn job-satus-to-status-text [status]
  (condp = status
    "red" "Failed"
    "blue" "OK"
    "Unknown"))

(defpartial job [{:strs [url color name]}]
  [:tr
   [:td [:a {:href url} name]]
   [:td [:span {:class (str "label " (job-status-to-btn-class color))} (job-satus-to-status-text color)]]])

(defpartial jobs-list [{:strs [name jobs]}]
  [:div.span8 [:h2 name] [:table.table.table-striped
                    [:thead
                     [:tr
                      [:th.span6 "Name"]
                      [:th "Status"]]]
                    (map job (filter #(<= 0 ( .indexOf (.toLowerCase ("name" %))
                                                       (.toLowerCase @job-filter))) jobs))]])

(defpartial render-server [name info-url]
  [:p [:h1 name] [:h2 info-url]])

(defpartial servers-list [items]
  [:section#results (map jobs-list items)])

(defn reply->clojure [reply]
  (js->clj (.getResponseJson (.-target reply))))

(defn showJobs [reply]
  (empty $jenkins)
  (append $jenkins (servers-list (reply->clojure reply))))

(delegate ($ :body) "#jobname" :keyup
          (fn [e]
            (.preventDefault e)
            (swap! job-filter (fn [x] (.-value (.-target e))))
            (go)))

(defn got-servers [reply]
  (let [rep-servers (reply->clojure reply)]
    (doseq [server rep-servers]
      (let [{:strs [name info]} server]
        (swap! servers assoc name info)
        (append $jenkins (render-server name info))))))

(defn call-with-callback [path callback]
  (.send goog.net.XhrIo path callback))

(defn go [] (call-with-callback "api/servers" got-servers))

(go)
