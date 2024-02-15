from django.urls import path
from .views import UserView, UserInfoView, UserAdminView
from .views import ProfileView

urlpatterns = [
    # Users
    # path('users', UserAdminView.as_view({'get': 'getAllUsers'})),
    path('register', UserView.as_view({'post': 'register'})),
    path('login', UserView.as_view({'post': 'login'})),
    path('user', UserInfoView.as_view({'get': 'getUser'})),
    path('logout', UserInfoView.as_view({'post': 'logout'})),
    # create superuser
    # path('superuser', UserView.as_view({'post': 'superuser'})),
    # path('refresh_token', UserInfoView.as_view({'get': 'refreshToken'})),
    # path('user/<str:uuid>', UserAdminView.as_view({'delete': 'delete'})),
    
    # Profile
    path('profile/<str:id>', ProfileView.as_view({'get': 'getProfile'})),
    path('profile/<str:id>', ProfileView.as_view({'put': 'put'})),
    path('profile_stats/<str:id>', ProfileView.as_view({'get': 'getStats'})),
]