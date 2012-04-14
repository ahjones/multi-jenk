(ns multi-jenk.views.welcome
  (:require [multi-jenk.views.common :as common]
            [clj-http.client :as client]
            [cheshire.core :as json])
  (:use [noir.core :only [defpage]]
        [noir.response :only [json]]
        [hiccup.core :only [html]]))

(def jenkins-servers [{:name "Demo" :location "http://33.33.33.10:8080"}])

(defpage "/api/servers" []
  (json jenkins-servers))

(defn get-server-job [url]
  (json/parse-string (:body (client/get (str url "/api/json"))) true))

(defn get-server-jobs []
  (for [server jenkins-servers]
    {:name (:name server) :jobs (:jobs (get-server-job (:location server)))}))

(defpage "/api/statuses" []
  (json (get-server-jobs)))

(defpage "/dash" []
  (common/layout
   [:header.subhead.jumbotron [:h1 "Jenkins Dashboard"]]
   [:input#jobname.span4 {:type "text"}]
   [:div#jenkins]))
