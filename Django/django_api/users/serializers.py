from rest_framework import serializers
from .models import User
from .models import Profile

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
                'uuid': user.uuid,
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

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ['id', 'user', 'name', 'surnames', 'image', 'biography']

    def to_Profile(instance):
        return {
            "uuid": instance.user.uuid,
            "id": instance.id,
            "user": instance.user,
            "name": instance.name,
            "surnames": instance.surnames,
            "image": instance.image,
            "biography": instance.biography,
        }

    def create(context):
        user_id = context['id']
        user = User.objects.get(pk=user_id)

        if user is None:
            raise serializers.ValidationError('User not found')

        profile = Profile.objects.create(
            user_id=user_id, 
            name= context['username'], 
            surnames="",
            image="https://avatars.dicebear.com/api/adventurer/" + context['username'] + ".svg",
            biography="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.")

        profile.save()
        return profile

    def update(current_user, user_context, profile_context):
        user_id = profile_context['id']
        user = User.objects.get(pk=user_id)

        newName = profile_context['name']
        newSurnames = profile_context['surnames']
        newImage = profile_context['image']
        newBiography = profile_context['biography']

        newUsername = user_context['username']
        newEmail = user_context['email']

        if user is None:
            raise serializers.ValidationError('User not found')

        if user != current_user:
            raise serializers.ValidationError('Invalid access')

        if newUsername != user.username: 
            username_exist = len(User.objects.filter(username=newUsername))
            print(username_exist)
            if (username_exist > 0):
                raise serializers.ValidationError('*Username already exists.')
            User.objects.filter(username=current_user).update(username = newUsername)

        if newEmail != user.email: 
            email_exist = len(User.objects.filter(email=newEmail))
            print(email_exist)
            if (email_exist > 0):
                raise serializers.ValidationError('*Email already exists.')
            User.objects.filter(username=current_user).update(email = newEmail)

        newUser = User.objects.get(username=newUsername)
        
        Profile.objects.filter(user_id=user_id).update(
            name = newName,
            surnames = newSurnames,
            image = newImage,
            biography = newBiography
        )

        profile = Profile.objects.get(user_id=user_id)

        return {
            'user': {
                'id': newUser.id,
                'username': newUser.username,
                'email': newUser.email,
                'type': newUser.type
            },
            'profile': {
                'id': profile.id,
                'name': profile.name,
                'surnames': profile.surnames,
                'image': profile.image,
                'biography': profile.biography,
            },
            'token': newUser.token,
            'ref_token': newUser.ref_token,
        }

    # def getStats(current_user, id):
    #     user = User.objects.get(pk=id)

    #     if user is None:
    #         raise serializers.ValidationError('User not found')

    #     if user != current_user:
    #         raise serializers.ValidationError('Invalid access')
            
    #     total_stats = len(Rent.objects.filter(user_id=id))
    #     return total_stats
