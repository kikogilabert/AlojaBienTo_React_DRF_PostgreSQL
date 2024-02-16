from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.permissions import (IsAuthenticated, AllowAny)
from users.core.permissions import IsAdmin
from .serializers import ReservationSerializer
from .models import Reservation

class ReservationsView(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated,)

    def post(self, request, apartment_id):
        username = request.user
        f_ini = request.data.get('f_ini')
        f_end = request.data.get('f_end')
        
        serializer_context = { 'username': username, 'apartment_id': apartment_id, 'f_ini': f_ini, 'f_end': f_end }
        ReservationSerializer.reservation(context=serializer_context)
        
        return Response({"Message":"Created Succesfully"})

    def getReservationsOfOneUser(self, request):
        username = request.user
        
        serializer_context = { 'username': username }
        
        reservations_query = ReservationSerializer.getReservations(context=serializer_context)
        reservations_serializer = ReservationSerializer(reservations_query, many=True)
    
        return Response(reservations_serializer.data, status=status.HTTP_200_OK)

class ReservationAdminView(viewsets.GenericViewSet):
    permission_classes = [IsAdmin]

    def getAllReservations(self, request):
        data = Reservation.objects.all()
        serializer = ReservationSerializer(data, many=True)
        return Response(serializer.data)

    def delete(self, request, id):
        reservation = Reservation.objects.get(id=id)
        reservation.delete()
        return Response({'data': 'Reservation deleted successfully'})