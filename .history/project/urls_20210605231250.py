"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from math import dist
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView


urlpatterns = [
    
    path('admin/', admin.site.urls),
    path('clinic/', include('clinic.urls')),
    path('api/', include('api.urls')),
    re_path('', TemplateView.as_view(template_name="clinic/index.html")),
    path('favicon.ico', include('api.urls')),
#     path('service-worker.js', (TemplateView.as_view(template_name="clinic/js/service-worker.js", 
#   content_type='application/javascript',)), name='service-worker.js'),
#     path('precache-manifest.21cb53048a4fac6b8ab411c4558fbe06.js', (TemplateView.as_view(template_name="clinic/vue-dist/precache-manifest.21cb53048a4fac6b8ab411c4558fbe06.js", 
#   content_type='application/javascript',)), name='precache-manifest.21cb53048a4fac6b8ab411c4558fbe06.js'),


     path('', include('clinic.urls')),
    #  re_path('^.*$', TemplateView.as_view(template_name="clinic/wrappers/base.html")),

]
