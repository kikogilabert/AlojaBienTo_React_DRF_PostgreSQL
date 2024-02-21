from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.permissions import (IsAuthenticated, AllowAny)
from users.core.permissions import IsAdmin
from .models import IncidenceApartment, Notification
from .serializers import IncidenceApartmentSerializer
from .serializers import NotificationSerializer

class IncidenceApartmentView(viewsets.GenericViewSet):

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = [IsAuthenticated]
        else:
            self.permission_classes = [IsAdmin]
        return super(IncidenceApartmentView, self).get_permissions()

    def post(self, request):
        data = request.data['apartment_incidence']

        serializer_context = {
            'username': request.user,
            'apartment_id': data['apartment_id'],
            'title': data['title'],
            'desc': data['desc'],
        }

        incidence = IncidenceApartmentSerializer.create(serializer_context)
        return Response(IncidenceApartmentSerializer.to_incidence_apartment(incidence))

class IncidentsAdminView(viewsets.GenericViewSet):
    permission_classes = [IsAdmin]

    def getAllIncidents(self, request):
        incidents_slots = IncidenceApartment.objects.all()
        incidents_slots_serializer = IncidenceApartmentSerializer(incidents_slots, many=True)
        return Response(incidents_slots_serializer.data)

    def updateIncidence(self, request, id):
        context = request.data
        incidence = IncidenceApartmentSerializer.updateStatus(id, context)
        return Response(IncidenceApartmentSerializer.to_incidence_apartment(incidence))

    def delete(self, request, id):
        incidence_scooter = IncidenceApartment.objects.get(id=id)
        incidence_scooter.delete()
        return Response({'data': 'Incidence deleted successfully'})

class NotificationsView(viewsets.GenericViewSet):
    permission_classes = [IsAuthenticated]

    def getNotifications(self, request):
        notifications_serializer = NotificationSerializer.getUserNotification(request.user)
        notifications = NotificationSerializer(notifications_serializer, many=True)
        return Response(notifications.data)
    
    def countNotifications(self, request):
        notifications_serializer = NotificationSerializer.countNotifications(request.user)
        return Response(notifications_serializer)

    def Set_seen_Notification(self, request, id):
        serializer_context = { 'username': request.user, 'id': id }
        serializer = NotificationSerializer.seeNotification(context=serializer_context)
        return Response(NotificationSerializer.to_notification(serializer))
    
    def Seen_Notification(self, request):
        notifications_serializer = NotificationSerializer.GetSeen_Notification(request.user)
        notifications = NotificationSerializer(notifications_serializer, many=True)
        return Response(notifications.data)
