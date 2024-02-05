from django.shortcuts import render
from django.http.response import JsonResponse
from django.http import HttpResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from django.urls import reverse
from rest_framework import serializers 

from rest_framework.response import Response
from rest_framework import viewsets


from .models import City 
from .serializers import CitySerializer

from .models import Zone
from .serializers import ZoneSerializer

from .models import Apartment
from .serializers import ApartmentSerializer

from rest_framework.decorators import api_view

class CityView(viewsets.GenericViewSet):

        #______________________________GET ALL CITIES______________________________________________________________
        
        def getAllCities(self,request):   
            cities = City.objects.all()
            cities_serializer = CitySerializer(cities, many=True)
            return JsonResponse(cities_serializer.data, safe=False)    
    
        #______________________________CREATE ONE CITY______________________________________________________________

        def post(self,request):
            city_data = JSONParser().parse(request)
            city_serializer = CitySerializer(data=city_data)

            if city_serializer.is_valid():
                city_serializer.save()
                return JsonResponse(city_serializer.data, status=status.HTTP_201_CREATED) 
            return JsonResponse(city_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        #______________________________DELETE ONE CITY_______________________________________________________________
        
        def delete(self, request, slug_city):
            city = City.objects.get(slug=slug_city) 
            city.delete() 
            return JsonResponse({'message': 'City was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
        
        #______________________________GET ONE CITY_______________________________________________________________
        
        def getOneCity(self,request, slug_city):
            try: 
                city = City.objects.get(slug=slug_city)
                city_serializer = CitySerializer(city) 
                return JsonResponse(city_serializer.data)
            except City.DoesNotExist: 
                return JsonResponse({'message': 'The City does not exist'}, status=status.HTTP_404_NOT_FOUND)

        #______________________________UPDATE ONE CITY_____________________________________________________________
        
        def put(self, request, slug_city):
            try:
                city = City.objects.get(slug=slug_city)
                city_data = JSONParser().parse(request) 
                city_serializer = CitySerializer(city, data=city_data) 
                if city_serializer.is_valid(): 
                    city_serializer.save() 
                return JsonResponse(city_serializer.data) 
            except City.DoesNotExist:
                return JsonResponse({'message': 'The City does not exist'}, status=status.HTTP_404_NOT_FOUND)
            

class ZoneView(viewsets.GenericViewSet):

        #______________________________GET ALL ZONES______________________________________________________________
        
        def getAllZones(self,request):   
            zones = Zone.objects.all()
            zones_serializer = ZoneSerializer(zones, many=True)
            return JsonResponse(zones_serializer.data, safe=False)
        
        #______________________________CREATE ONE ZONE______________________________________________________________
        
        def post(self,request):
            
            name = request.data['name']
            zone_type = request.data['zone_type']
            city = request.data['city']
            zone_image = request.data['zone_image']

            try:
                city_2 = City.objects.get(pk=city)

                zone = Zone.objects.create(
                    name=name,
                    zone_type=zone_type,
                    city=city_2,
                    zone_image=zone_image
                )
                zone_serializer = ZoneSerializer(instance=zone)

                return JsonResponse(zone_serializer.data , status=status.HTTP_201_CREATED)

            except City.DoesNotExist:
                return JsonResponse({'error': 'City not found'}, status=status.HTTP_404_NOT_FOUND)
        
        #______________________________UPDATE ONE ZONE_____________________________________________________________
        
        def put(self, request, slug_zone):
            try:
                zone = Zone.objects.get(slug=slug_zone)
                zone_data = JSONParser().parse(request) 
                zone_serializer = ZoneSerializer(zone, data=zone_data) 
                if zone_serializer.is_valid(): 
                    zone_serializer.save() 
                return JsonResponse(zone_serializer.data) 
            except Zone.DoesNotExist:
                return JsonResponse({'message': 'The Zone does not exist'}, status=status.HTTP_404_NOT_FOUND)

        #______________________________GET ONE ZONE_______________________________________________________________
            
        def getOneZone(self,request, slug_zone):
            try: 
                zone = Zone.objects.get(slug=slug_zone)
                zone_serializer = ZoneSerializer(zone) 
                return JsonResponse(zone_serializer.data)
            except Zone.DoesNotExist: 
                return JsonResponse({'message': 'The Zone does not exist'}, status=status.HTTP_404_NOT_FOUND)
            
        #______________________________DELETE ONE ZONE_______________________________________________________________
        
        def delete(self, request, slug_zone):
            zone = Zone.objects.get(slug=slug_zone) 
            zone.delete() 
            return JsonResponse({'message': 'Zone was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
        
        #______________________________GET ALL ZONES BY CITY______________________________________________________________
        
        def getAllZonesByCity(self,request, slug_city):   
            try:
                city = City.objects.get(slug=slug_city)
                zones = Zone.objects.filter(city=city)
                zones_serializer = ZoneSerializer(zones, many=True)
                return JsonResponse(zones_serializer.data, safe=False)
            except City.DoesNotExist:
                return JsonResponse({'error': 'City not found'}, status=status.HTTP_404_NOT_FOUND)
            
            
class ApartmentView(viewsets.GenericViewSet):

        #______________________________GET ALL APARTMENTS______________________________________________________________
        
        def getAllApartments(self,request):
            apartments = Apartment.objects.all()
            apartments_serializer = ApartmentSerializer(apartments, many=True)
            return JsonResponse(apartments_serializer.data, safe=False)
    
        #______________________________GET ONE APARTMENT_______________________________________________________________
        
        def post(self,request):
            
            location = request.data['location']
            price = request.data['price']
            rooms = request.data['rooms']
            bathrooms = request.data['bathrooms']
            size = request.data['size']
            apartment_images = request.data['apartment_images']
            zone = request.data['zone']

            try:
                zone_2 = Zone.objects.get(pk=zone)

                apartment = Apartment.objects.create(
                    location=location,
                    price=price,
                    rooms=rooms,
                    bathrooms=bathrooms,
                    size=size,
                    apartment_images=apartment_images,
                    zone=zone_2
                )

                apartment_serializer = ApartmentSerializer(instance=apartment)
                return JsonResponse(apartment_serializer.data , status=status.HTTP_201_CREATED)

            except Zone.DoesNotExist:
                return JsonResponse({'error': 'Zone not found'}, status=status.HTTP_404_NOT_FOUND)
        
        #______________________________UPDATE ONE APARTMENT_____________________________________________________________
        
        def put(self, request, slug_apartment):
            try:
                apartment = Apartment.objects.get(slug=slug_apartment)
                apartment_data = JSONParser().parse(request)                
                apartment_serializer = ApartmentSerializer(apartment, data=apartment_data)
                
                if apartment_serializer.is_valid():
                    apartment_serializer.save()
                return JsonResponse(apartment_serializer.data) 
            except Apartment.DoesNotExist:
                return JsonResponse({'message': 'The Apartment does not exist'}, status=status.HTTP_404_NOT_FOUND)
            
        #______________________________GET ONE APARTMENT_______________________________________________________________
        
        def getOneApartment(self,request, slug_apartment):
            try: 
                apartment = Apartment.objects.get(slug=slug_apartment)
                apartment_serializer = ApartmentSerializer(apartment) 
                return JsonResponse(apartment_serializer.data)
            except Apartment.DoesNotExist: 
                return JsonResponse({'message': 'The Apartment does not exist'}, status=status.HTTP_404_NOT_FOUND)
            
        #______________________________DELETE ONE APARTMENT_______________________________________________________________
        
        def delete(self, request, slug_apartment):
            apartment = Apartment.objects.get(slug=slug_apartment) 
            apartment.delete() 
            return JsonResponse({'message': 'Apartment was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
        
        #______________________________GET ALL APARTMENTS BY ZONE______________________________________________________________
        
        def getApartmentsByZone(self,request, slug_zone):   
            try:
                zone = Zone.objects.get(slug=slug_zone)
                apartments = Apartment.objects.filter(zone=zone)
                apartments_serializer = ApartmentSerializer(apartments, many=True)
                return JsonResponse(apartments_serializer.data, safe=False)
            except Zone.DoesNotExist:
                return JsonResponse({'error': 'Zone not found'}, status=status.HTTP_404_NOT_FOUND)