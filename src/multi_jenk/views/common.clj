(ns multi-jenk.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css include-js html5]]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "multi-jenk"]
               (include-js "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js")
               (include-js "/js/bootstrap.js")
               (include-css "/css/bootstrap.css")
               (include-css "/css/bootstrap-responsive.css")]
              [:body
               [:div#jenkins.container
                content]
               (include-js "/cljs/bootstrap.js")]))
