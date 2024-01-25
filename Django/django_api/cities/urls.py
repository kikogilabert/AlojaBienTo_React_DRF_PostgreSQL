from django.urls import path
from . import views
from .views import CityView
from .views import ZoneView
from .views import ApartmentView

urlpatterns = [
    # Rutas CRUD Cities
    path('cities/', CityView.as_view({'get': 'getAllCities'})),
    path('cities/<str:slug_city>', CityView.as_view({'get': 'getOneCity'})),
    path('cities/', CityView.as_view({'post': 'post'})),
    path('cities/<str:slug_city>', CityView.as_view({'delete': 'delete'})),
    path('cities/<str:slug_city>', CityView.as_view({'put': 'put'})),
    
    # Rutas CRUD Zones
    path('zones/', ZoneView.as_view({'get': 'getAllZones'})),
    path('zones/<str:slug_zone>', ZoneView.as_view({'get': 'getOneZone'})),
    path('zones/', ZoneView.as_view({'post': 'post'})),
    path('zones/<str:slug_zone>', ZoneView.as_view({'delete': 'delete'})),
    path('zones/<str:slug_zone>', ZoneView.as_view({'put': 'put'})),
    path('zones/<str:slug_city>', ZoneView.as_view({'get': 'getAllZonesByCity'})),
    
    #Rutas CRUD Apartments
    path('apartments/', ApartmentView.as_view({'post': 'post'})),
    path('apartments/<str:slug_apartment>', ApartmentView.as_view({'get': 'getOneApartment'})),
    path('apartments/<str:slug_apartment>', ApartmentView.as_view({'delete': 'delete'})),
    path('apartments/<str:slug_apartment>', ApartmentView.as_view({'put': 'put'})),
    path('apartments/', ApartmentView.as_view({'get': 'getAllApartments'})),
    path('apartments/zone/<str:slug_zone>', ApartmentView.as_view({'get': 'getApartmentsByZone'})),
]