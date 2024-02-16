from datetime import datetime
from rest_framework import serializers
from .models import Reservation
from users.models import User
from cities.models import Apartment
# from scoonti.app.stations.models import Scooter, Slot

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = ['id', 'user_id', 'apartment_id', 'f_ini', 'f_end']

    def to_reservation(instance):
        return ({
            "id": instance.id,
            "user": instance.user_id,
            "apartment": instance.apartment_id,
            "f_ini": instance.initial_date,
            "f_end": instance.end_date,
        })

    def reservation(context):
        username = context['username']
        apartment_id = context['apartment_id']
        f_ini = context['f_ini']
        f_end = context['f_end']

        user = User.objects.get(username=username)

        if user is None:
            raise serializers.ValidationError('User not found')

        apartment = Apartment.objects.get(pk=apartment_id)
        
        if apartment is None:
            raise serializers.ValidationError('Apartment not found')

        reservation = Reservation.objects.create(user_id=user.id, apartment_id=apartment.id, f_ini=f_ini, f_end=f_end)
        reservation.save()

    def getReservations(context):
        username = context['username']

        user = User.objects.get(username=username)

        if user is None:
            raise serializers.ValidationError('User not found')

        reservations = Reservation.objects.filter(user_id=user.id)
        return reservations
        
        
    # def delete(context):
    #     rent_id = context['rent_id']

    #     rent = Rent.objects.get(pk=rent_id)

    #     if rent is None:
    #         raise serializers.ValidationError('Rent is not find')

    #     if rent.end_slot_id is None:
    #         raise serializers.ValidationError('Rent is not over')

    #     rent.delete()
    #     return True
