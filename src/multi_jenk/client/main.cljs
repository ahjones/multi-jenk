(ns multi-jenk.client.main
  (:require [crate.core :as crate])
  (:use [jayq.core :only [$ append delegate data]]))

(def $jenkins ($ :#jenkins))
(append $jenkins (crate/html [:p "MultiJenk"]))

(def $body ($ :body))
