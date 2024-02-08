from django.db import models
from django.contrib.auth.models import (AbstractBaseUser, BaseUserManager, PermissionsMixin)
from django.conf import settings
from datetime import datetime, timedelta
import jwt

class UserManager(BaseUserManager):
    def create_user(self, username, email, password):
        user = self.model(email=self.normalize_email(email), username=username)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, email, password):
        user = self.model(email=self.normalize_email(email), username=username, type='admin')
        user.is_staff = True
        user.is_superuser = True
        user.set_password(password)
        user.save()
        return user

class User(AbstractBaseUser, PermissionsMixin):
    uuid = models.CharField('uuid', max_length=36, unique=True, editable=False, null=False)
    username = models.CharField('username', max_length=30, unique=True, null=False)
    email = models.EmailField('email', unique=True)
    type = models.CharField('type', max_length=10, null=False, default='client')

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()

    @property
    def token(self):
        return self.generate_token_jwt(1080)
    
    @property
    def ref_token(self):
        return self.generate_token_jwt(10800)

    def generate_token_jwt(self, token_time):
        dt = datetime.now() + timedelta(seconds=token_time)

        token = jwt.encode({'username': self.username, 'exp': dt.utcfromtimestamp(dt.timestamp())
        }, settings.SECRET_KEY, algorithm='HS256')

        return token.decode('utf-8')
