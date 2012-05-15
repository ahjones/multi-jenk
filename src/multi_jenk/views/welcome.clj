(ns multi-jenk.views.welcome
  (:require [multi-jenk.views.common :as common]
            [clj-http.client :as client]
            [cheshire.core :as json])
  (:use [noir.core :only [defpage]]
        [noir.response :only [json]]
        [hiccup.core :only [html]]))

(def jenkins-servers [{:name "Demo" :location "http://33.33.33.10:8080"}
                      {:name "Demo2" :location "http://33.33.33.10:8081"}
                      {:name "Timeout" :location "http://localhost:1234"}])

(defmacro as-futures [[a args] & body]
  (let [parts (partition-by #{'=>} body)
        [acts _ [res]] (partition-by #{:as} (first parts))
        [_ _ task] parts]
    `(let [~res (for [~a ~args] (future ~@acts))]
       ~@task)))

(defpage "/api/servers" []
  (json (for [server jenkins-servers]
          (conj server [:info (str "api/statuses?server=" (:name server))]))))

(defn parse-json [json]
  (json/parse-string json true))

(defn get-server-job [url]
  (try {:jobs
        (:jobs
         (parse-json (:body (client/get (str url "/api/json") {:socket-timeout 5000}))))}
       (catch Exception e {:problem (.getMessage e)})))

(defn get-server-jobs [{:keys [name location]}]
  (merge {:name name} (get-server-job location)))

(defn multi-get [servers]
  (as-futures [server servers] (get-server-jobs server) :as results => (for [result results] @result)))

(defpage "/api/statuses" {:keys [server]}
  (json (multi-get (if server
                     (let [servers (clojure.string/split server #",")]
                       (filter #(some #{(:name %)} servers) jenkins-servers))
                     jenkins-servers))))

(defpage "/api/status" {:keys [server]}
  (json (clojure.string/split server #",")))

(defpage "/dash" []
  (common/layout
   [:header.subhead.jumbotron [:h1 "Jenkins Dashboard"]]
   [:input#jobname.span4 {:type "text"}]
   [:div#jenkins]))
