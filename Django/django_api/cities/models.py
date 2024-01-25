from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class City(models.Model):
    slug = models.CharField(max_length=255, unique=True, blank=True)
    name = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    
    def __str__(self):
        return str(self.id)

class Zone(models.Model):
    slug = models.CharField(max_length=100, blank=True)
    name = models.CharField(max_length=100)
    zone_type = models.CharField(max_length=100)
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='zones')
    zone_image = models.CharField(max_length=255)

    def __str__(self):
        return str(self.id)

class Apartment(models.Model):
    slug = models.CharField(max_length=100, blank=True)
    name = models.CharField(max_length=100, default='', blank=True)
    location = models.CharField(max_length=100)
    price = models.IntegerField()
    rooms = models.IntegerField()
    bathrooms = models.IntegerField()
    size = models.IntegerField()
    apartment_images = ArrayField(models.CharField(max_length=255, default=''), blank=True)
    zone = models.ForeignKey(Zone, on_delete=models.CASCADE, related_name='apartments')
    
    def __str__(self):
        return str(self.id)