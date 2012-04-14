(ns multi-jenk.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css include-js html5]]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "multi-jenk"]
               (include-css "/css/reset.css")]
              [:body
               [:div#wrapper
                content]
               (include-js "/cljs/bootstrap.js")]))
