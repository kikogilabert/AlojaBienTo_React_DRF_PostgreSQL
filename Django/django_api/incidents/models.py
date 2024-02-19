from django.db import models
from users.models import User
from cities.models import Apartment

class IncidenceApartment(models.Model):

    title = models.CharField(max_length=100)
    status = models.CharField(max_length=100, default='pending')
    desc = models.CharField(max_length=300)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_incident")
    apartment = models.ForeignKey(Apartment, on_delete=models.CASCADE, related_name="apartment_affected")

    def __str__(self):
        return str(self.id)
    
class Notification(models.Model):

    seen = models.BooleanField(default=False)
    desc = models.CharField(max_length=300)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_notification")

    def __str__(self):
        return str(self.id)