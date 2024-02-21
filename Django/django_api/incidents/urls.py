from django.urls import path
from .views import IncidenceApartmentView, IncidentsAdminView, NotificationsView

urlpatterns = [
    # ADMIN
    path('apartment_incidents', IncidentsAdminView.as_view({"get": "getAllIncidents"})),
    # UPDATE STATUS INCIDENCE
    path('apartment_incident/<str:id>', IncidentsAdminView.as_view({"put": "updateIncidence"})),
    path('apartment_incident/<str:id>', IncidentsAdminView.as_view({"delete": "delete"})),

    # CLIENT
    path('apartment_incidence', IncidenceApartmentView.as_view({"post": "post"})),

    # NOTIFICATIONS
    # NOT SEEN
    path('notifications', NotificationsView.as_view({"get": "getNotifications"})),
    
    # CHANGE STATE NOTIFICATION
    path('notifications/<int:id>', NotificationsView.as_view({"put": "Set_seen_Notification"})),
    
    # SEEN NOTIFICATIONS
    path('seen_notifications', NotificationsView.as_view({"get": "Seen_Notification"})),

    # COUNT NOTIFICATIONS
    path('count_notifications', NotificationsView.as_view({"get": "countNotifications"})),
    
    #DELETE NOTIFICATION
    path('seen_notifications/<int:id>', NotificationsView.as_view({"delete": "delete"})),

]
