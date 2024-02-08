from rest_framework import serializers
from .models import User

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ( 'id', 'uuid', 'username', 'email', 'password', 'type')

    def register(context):
        username = context['username']
        email = context['email']
        password = context['password']

        username_exist = len(User.objects.filter(username=username))
        email_exist = len(User.objects.filter(email=email))

        if (email_exist > 0 or username_exist > 0):
            raise serializers.ValidationError('*Username or email already exists.')

        user = User.objects.create_user(email=email, username=username, password=password)

        return {
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'type': user.type
            },
            'token': user.token,
            'ref_token': user.ref_token,
        }

    def login(context):
        username = context['username']
        password = context['password']

        try:
            user = User.objects.get(username=username)
        except:
            raise serializers.ValidationError('*User not found.')

        if not user.check_password(password):
            raise serializers.ValidationError('*Wrong username or password.')

        return {
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'type': user.type
            },
            'token': user.token,
            'ref_token': user.ref_token,
        }

    def getUser(context):
        username = context['username']

        try:
            user = User.objects.get(username=username)
        except:
            raise serializers.ValidationError('*User not found.')

        return {
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'type': user.type
            },
            'token': user.token,
            'ref_token': user.ref_token,
        }

    def refreshToken(context):
        username = context['username']

        try:
            user = User.objects.get(username=username)
        except:
            raise serializers.ValidationError('Username not valid.')

        return {
            'token': user.token
        }
