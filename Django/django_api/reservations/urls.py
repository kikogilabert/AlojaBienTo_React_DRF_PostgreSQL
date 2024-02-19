from django.urls import path
from .views import ReservationsView, ReservationAdminView

urlpatterns = [
    # CLIENT
    path('reservation/<int:apartment_id>', ReservationsView.as_view({"post": "post"})),
    path('reservation', ReservationsView.as_view({"get": "getReservationsOfOneUser"})),
    path('reservations/<int:id>', ReservationsView.as_view({"delete": "delete"})),
    
    # ADMIN
    path('reservations', ReservationAdminView.as_view({"get": "getAllReservations"})),
]