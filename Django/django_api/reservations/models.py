from django.db import models
from users.models import User
from cities.models import Apartment

class Reservation(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user")
    apartment = models.ForeignKey(Apartment, on_delete=models.CASCADE, related_name="apartment")
    f_ini = models.CharField(max_length=100)
    f_end = models.CharField(max_length=100)

    def __str__(self):
        return str(self.id)