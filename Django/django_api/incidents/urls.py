from django.urls import path
from .views import IncidenceApartmentView, IncidentsAdminView, NotificationsView

urlpatterns = [
    # ADMIN
    path('apartment_incidents', IncidentsAdminView.as_view({"get": "getAllIncidents"})),
    path('apartment_incident/<str:id>', IncidentsAdminView.as_view({"put": "updateIncidence"})),
    path('apartment_incident/<str:id>', IncidentsAdminView.as_view({"delete": "delete"})),

    # CLIENT
    path('apartment_incidence', IncidenceApartmentView.as_view({"post": "post"})),

    # NOTIFICATIONS
    path('notifications', NotificationsView.as_view({"get": "getNotifications"})),
    path('notifications/<int:id>', NotificationsView.as_view({"put": "seeNotification"})),
    path('seen_notifications', NotificationsView.as_view({"get": "Seen_Notification"})),


]
