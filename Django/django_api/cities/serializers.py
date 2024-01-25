from django.http.response import JsonResponse
from rest_framework import serializers 
from .models import City, Zone, Apartment
from rest_framework.exceptions import NotFound


class CitySerializer(serializers.ModelSerializer):

    class Meta:
        model = City
        fields = ('id','slug','name','state','country','image')
        read_only_fields = ('id', 'slug')
    
class ZoneSerializer(serializers.ModelSerializer):

    class Meta:
        model = Zone
        fields = ('id', 'slug', 'name', 'zone_type', 'city', 'zone_image')
        read_only_fields = ('id', 'slug')        
        
class ApartmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Apartment
        fields = ('id','slug','name','location','price','rooms','bathrooms','size','apartment_images','zone')
        read_only_fields = ('id', 'slug')