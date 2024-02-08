from django.urls import path
from .views import UserView, UserInfoView, UserAdminView
# from .views import ProfileView

urlpatterns = [
    # Users
    # path('users', UserAdminView.as_view({'get': 'getAllUsers'})),
    path('register', UserView.as_view({'post': 'register'})),
    path('login', UserView.as_view({'post': 'login'})),
    path('user', UserInfoView.as_view({'get': 'getUser'})),
    # path('refresh_token', UserInfoView.as_view({'get': 'refreshToken'})),
    # path('user/<str:uuid>', UserAdminView.as_view({'delete': 'delete'})),
]