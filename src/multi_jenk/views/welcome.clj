(ns multi-jenk.views.welcome
  (:require [multi-jenk.views.common :as common]
            [clj-http.client :as client]
            [cheshire.core :as json])
  (:use [noir.core :only [defpage]]
        [noir.response :only [json]]
        [hiccup.core :only [html]]))

(def jenkins-servers [{:name "Demo" :location "http://33.33.33.10:8080"}
                      {:name "Demo2" :location "http://33.33.33.10:8080"}])

(defmacro as-futures [[a args] & body]
  (let [parts (partition-by #{'=>} body)
        [acts _ [res]] (partition-by #{:as} (first parts))
        [_ _ task] parts]
    `(let [~res (for [~a ~args] (future ~@acts))]
       ~@task)))

(defpage "/api/servers" []
  (json jenkins-servers))

(defn get-server-job [url]
  (json/parse-string (:body (client/get (str url "/api/json"))) true))

(defn get-servers-jobs []
  (for [server jenkins-servers]
    {:name (:name server) :jobs (:jobs (get-server-job (:location server)))}))

(defn get-server-jobs [server]
  {:name (:name server) :jobs (:jobs (get-server-job (:location server)))})

(defn multi-get [servers]
  (as-futures [server servers]
              (get-server-jobs server)
              :as results
              =>
              (for [result results] @result)))

(defpage "/api/statuses" []
  (json (multi-get jenkins-servers)))

(defpage "/dash" []
  (common/layout
   [:header.subhead.jumbotron [:h1 "Jenkins Dashboard"]]
   [:input#jobname.span4 {:type "text"}]
   [:div#jenkins]))
