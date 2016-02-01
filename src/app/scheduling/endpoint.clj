(ns app.scheduling.endpoint
  (:require
   [app.server.templates.layout :as l]
   [app.security.identities :as ident]
   [cheshire.core :as json]
   [app.util :refer [str->int]]
   [ring.util.response :refer [redirect]]
   [app.scheduling.schedule :as schedule]
   [compojure.core :refer :all]))

;i18n
(def the-week {:sunday {:label "Sunday"}
               :monday {:label "Monday"}
               :tuesday {:label "Tuesday"}
               :wednesday {:label "Wednesday"}
               :thursday {:label "Thursday"}
               :friday {:label "Friday"}
               :saturday {:label "Saturday"}})

(defn extract-resources
  "convert a schedule row to a cal resource"
  [data]
  (let [classes (distinct (map (fn [r] (:class r)) (:classes data)))]
    (map (fn [dow] {:id dow
                    :title (get-in the-week [dow :label])
                    :children (map (fn [class]
                                     {:id (str dow "-" class)
                                      :title class}) classes)}) (:dow-layout data))))

(defn format-time [date]
  (.format (java.text.SimpleDateFormat. "HH:mm:ss") date))

(defn extract-events [data]
  ;day_of_week, class, title, start_at, end_at, duration
  (map (fn [row] {:id (str (:day_of_week row) "-" (:class row) "-" (:title row))
                  :resourceId (str (:day_of_week row) "-" (:class row))
                  :start (str "2015-08-07T" (format-time (:start_at row)))
                  :end (str "2015-08-07T" (format-time (:end_at row)))
                  :title (:title row)}) (:classes data)))

(defn convert-to-fullcal [data]
  {:resources (extract-resources data)
   :events (extract-events data)})

(defn add-slot [dow]
  [:a {:href (str "/scheduling/add/" dow)} [:i {:class "fa fa-plus"}]])

(defn scheduling-view [schedule]
  [:h1 "The Grind"]
  [:div {:class "scheduling-container"}
   [:script {:type "text/json" :id "schedule-data"}
    (json/generate-string (convert-to-fullcal schedule))]
   [:script {:src "/js/d3.min.js" :type "text/javascript"}]
   [:script {:src "/js/jquery.min.js" :type "text/javascript"}]
   [:script {:src "/js/moment.min.js" :type "text/javascript"}]
   [:script {:src "/js/fullcalendar.min.js" :type "text/javascript"}]
   [:script {:src "/js/scheduler.min.js" :type "text/javascript"}]
   [:script {:src "/js/scheduling.js" :type "text/javascript"}]])

(defn new-schedule [levels]
        [:h1 "Add some hustle"]
        [:form {:action "/scheduling" :method "POST"}
         [:label "Day of Week"]
         [:select {:name "day-of-week"}
          (for [d (keys the-week)]
            [:option {:value d} (get-in the-week [d :label])])
          ]
          [:label "Level"]
         [:select {:name "level"}
          (for [l levels]
            [:option {:value (:id l)} (:name l)]
            )

          ]
         [:label "Title"]
         [:input {:name "title" :type "text"}]
         [:label "Starts at"]
         [:input {:name "starts-at" :type "text"}]
         [:label "Duration"]
         [:input {:name "duration" :type "text"}]

         [:button {:type "submit"} "New Slot"]
         ]
  )

(defn scheduling-endpoint [config]
  (context "/scheduling" request
    (GET "/new" request
    (let [login-state (ident/extract request)
          db (:database config)
          levels (schedule/levels db 1)
          ]
         (l/chrome "Add New Schedule"
                   login-state
                   (new-schedule levels))))
    (POST "/" [day-of-week level title starts-at duration :as request]
          (let [login-state (ident/extract request)
                db (:database config)
                new-slot {
                          :day_of_week day-of-week
                          :level (str->int level)
                          :title title
                          :start_at starts-at
                          :duration duration
                          :organization_id 1 ; (:organization_id login-state)
                          }
                ]
            (schedule/register db new-slot)
            (redirect "/scheduling")
            ))
    (GET "/" request
      (let [login-state (ident/extract request)
            db (:database config)
            schedule (schedule/weekly db 1)]
        (l/chrome "STAFF"
                  login-state
                  (scheduling-view schedule))))))
