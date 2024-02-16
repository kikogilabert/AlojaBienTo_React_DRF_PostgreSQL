from django.urls import path
from .views import ReservationsView, ReservationAdminView

urlpatterns = [
    # CLIENT
    path('reservation/<int:apartment_id>', ReservationsView.as_view({"post": "post"})),
    path('reservation', ReservationsView.as_view({"get": "getReservationsOfOneUser"})),
    
    # ADMIN
    path('reservations', ReservationAdminView.as_view({"get": "getAllReservations"})),
    path('reservations/<int:id>', ReservationAdminView.as_view({"delete": "delete"})),
]