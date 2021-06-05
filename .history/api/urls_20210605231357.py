from django.urls import include, path
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from . import views
from api.views import CustomAuthToken
 
router = routers.DefaultRouter()
router.register(r'links', views.ShortLinkViewSet)

 
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-token-auth/', CustomAuthToken.as_view()),
    path('favicon.ico', include('api.urls')),
    path(
        'favicon.ico',
        views.faviconfix,
        name="viewbill"),
    # path('api-token-auth/', obtain_auth_token, name='api_token_auth'),  
    ]