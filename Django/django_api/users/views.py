from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import userSerializer
from .models import User
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser)
# from .core.permissions import IsAdmin

class UserView(viewsets.GenericViewSet):
    permission_classes = (AllowAny,)
    def register(self, request):
        data = request.data['user']

        serializer_context = {
            'username': data['username'],
            'email': data['email'],
            'password': data['password']
        }

        serializer = userSerializer.register(serializer_context)
        return Response(serializer)

    def login(self, request):
        data = request.data['user']

        serializer_context = {
            'username': data['username'],
            'password': data['password']
        }
        
        serializer = userSerializer.login(serializer_context)
        return Response(serializer)

class UserInfoView(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated,)

    def getUser(self, request):
        username = request.user
        serializer_context = { 'username': username }
        serializer = userSerializer.getUser(context=serializer_context)
        return Response(serializer)
    
    def refreshToken(self, request):
        username = request.user
        serializer_context = { 'username': username }
        serializer = userSerializer.refreshToken(serializer_context)
        return Response(serializer)


    def logout(self, request):
        return Response()

class UserAdminView(viewsets.GenericViewSet):
    # permission_classes = (IsAdmin,)

    def getAllUsers(self, request):
        users = User.objects.all()
        serializer = userSerializer(users, many=True)
        return Response(serializer.data)

    def delete(self, request, uuid):
        user = User.objects.get(uuid=uuid)
        user.delete()
        return Response({'data': 'User deleted successfully'})
