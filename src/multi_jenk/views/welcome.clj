(ns multi-jenk.views.welcome
  (:require [multi-jenk.views.common :as common]
            [clj-http.client :as client]
            [cheshire.core :as json])
  (:use [noir.core :only [defpage]]
        [noir.response :only [json]]
        [hiccup.core :only [html]]))

(def jenkins-servers [{:name "Demo" :location "http://33.33.33.10:8080"}])

(defpage "/servers" []
  (json jenkins-servers))

(defn get-server-status [url]
  (json/parse-string (:body (client/get (str url "/api/json"))) true))

(defn get-server-statuses []
  (for [server jenkins-servers]
    {:name (:name server) :status (:jobs (get-server-status (:location server)))}))

(defpage "/statuses" []
  (json (get-server-statuses)))

(defpage "/welcome" []
         (common/layout
           [:p "Welcome to multi-jenk"]))
