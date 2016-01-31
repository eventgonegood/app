(ns app.scheduling.endpoint
  (:require
   [app.server.templates.layout :as l]
   [app.security.identities :as ident]
   [cheshire.core :as json]
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

(def karhu-schedule {:dow-layout [:sunday :monday :tuesday :wednesday :thursday :saturday]
                     :classes {:monday [{:class "Fitness" :times [{:title "5:30am" :start "05:30:00" :end "06:30:00"}
                                                                  {:title "6:30am" :start "06:30:00" :end "07:30:00"}
                                                                  {:title "4:30pm" :start "16:30:00" :end "17:30:00"}
                                                                  {:title "5:30pm" :start "17:30:00" :end "18:30:00"}
                                                                  {:title "6:30pm" :start "18:30:00" :end "19:30:00"}
                                                                  {:title "7:30pm" :start "19:30:00" :end "20:30:00"}]}
                                        {:class "Sport" :times [{:title "5:30am" :start "05:30:00" :end "06:30:00"}
                                                                {:title "6:30am" :start "06:30:00" :end "07:30:00"}
                                                                {:title "Noon" :start "12:00:00" :end "13:00:00"}]}
                                        {:class "Competition" :times [{:title "5:30am" :start "05:30:00" :end "07:00:00"}
                                                                      {:title "10am" :start "10:00:00" :end "11:30:00"}
                                                                      {:title "6pm" :start "18:00:00" :end "19:30:00"}]}
                                        {:class "Weightlifting" :times [{:title "6:30am" :start "06:30:00" :end "07:30:00"}
                                                                        {:title "5:30pm" :start "17:30:00" :end "18:30:00"}
                                                                        {:title "7:00pm" :start "19:30:00" :end "20:00:00"}]}]

                               :tuesday [{:class "Fitness" :times [{:title "5:30am" :start "05:30:00" :end "06:30:00"}
                                                                   {:title "6:30am" :start "06:30:00" :end "07:30:00"}
                                                                   {:title "4:30pm" :start "16:30:00" :end "17:30:00"}
                                                                   {:title "5:30pm" :start "17:30:00" :end "18:30:00"}
                                                                   {:title "6:30pm" :start "18:30:00" :end "19:30:00"}
                                                                   {:title "7:30pm" :start "19:30:00" :end "20:30:00"}]}
                                         {:class "Sport" :times [{:title "5:30am" :start "05:30:00" :end "06:30:00"}
                                                                 {:title "6:30am" :start "06:30:00" :end "07:30:00"}
                                                                 {:title "Noon" :start "12:00:00" :end "13:00:00"}]}
                                         {:class "Competition" :times [{:title "5:30am" :start "05:30:00" :end "07:00:00"}
                                                                       {:title "10am" :start "10:00:00" :end "11:30:00"}
                                                                       {:title "6pm" :start "18:00:00" :end "19:30:00"}]}
                                         {:class "Weightlifting" :times [{:title "6:30am" :start "06:30:00" :end "07:30:00"}
                                                                         {:title "5:30pm" :start "17:30:00" :end "18:30:00"}
                                                                         {:title "7:00pm" :start "19:30:00" :end "20:00:00"}]}]
                               :wednesday []
                               :thursday []
                               :friday []
                               :saturday []
                               :sunday []}})

(defn extract-resources
  "convert a schedule row to a cal resource"
  [data]
  (let [classes (distinct (map (fn [r] (:class r)) (:classes data)))]
  (map (fn [dow] {:id dow
                  :title (get-in the-week [dow :label])
                  :children (map (fn [class]
                                   {:id (str dow "-" class)
                                    :title class}) classes)}) (:dow-layout data))
    )
  )

(defn format-time [date]
  (.format (java.text.SimpleDateFormat. "HH:mm:ss") date))

(defn extract-events [data]
  ;day_of_week, class, title, start_at, end_at, duration
  (map (fn [row]{:id (str (:day_of_week row) "-" (:class row) "-" (:title row))
                  :resourceId (str (:day_of_week row) "-" (:class row))
                :start (str "2015-08-07T" (format-time (:start_at row)))
                :end (str "2015-08-07T" (format-time (:end_at row)))
                :title (:title row)
                 } ) (:classes data)))

(defn convert-to-fullcal [data]
  {:resources (extract-resources data)
   :events (extract-events data)
   })

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

(defn scheduling-endpoint [config]
  (context "/scheduling" request
    (GET "/" request
      (let [login-state (ident/extract request)
            db (:database config)
            schedule (schedule/weekly db 1)]
        (l/chrome "STAFF"
                  login-state
                  (scheduling-view schedule))))))
