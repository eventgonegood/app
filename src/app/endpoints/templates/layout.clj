(ns app.endpoints.templates.layout
  (:require [hiccup.page :refer [include-css html5 include-js]])
  )

(defn head 
  "Builds out the title and adds javascript"
  [title js]
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0" }]
   [:title title]
   (include-css "/css/generated.css") 
   ]
  )

(defn chrome [title body]
  (html5
    (head title ["/js/compiled/score_entry.js"])
    [:body
     body
     
       (include-js "/js/compiled/score_entry.js")
     ]
    )  
  )

