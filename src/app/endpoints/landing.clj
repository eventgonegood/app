(ns app.endpoints.landing
 (:require [app.endpoints.templates.layout :as l]
           [buddy.auth :refer [authenticated?]]
            [ring.util.response :refer [redirect]]
           [compojure.core :refer :all]
           ) )

;;config will contain the component items
(defn landing-endpoint [config]
  (context "/" []
          (GET "/" [request]
               (if (authenticated? request)
                "Welcome Back"
                (redirect "/login")))))
