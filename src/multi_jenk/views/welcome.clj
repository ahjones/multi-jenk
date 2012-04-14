(ns multi-jenk.views.welcome
  (:require [multi-jenk.views.common :as common]
)
  (:use [noir.core :only [defpage]]
        [noir.response :only [json]]
        [hiccup.core :only [html]]))

(def jenkins-servers [{:name "Demo" :location "http://33.33.33.10:8080"}])

(defpage "/servers" []
  (json jenkins-servers))

(defpage "/welcome" []
         (common/layout
           [:p "Welcome to multi-jenk"]))
