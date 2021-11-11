"""django_react_base URL Configuration

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
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),

    # graphql
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),

    # Allauth Views
    path('accounts/', include('allauth.urls')),

    # Django Views
    path('', TemplateView.as_view(template_name='index.html')),

    # React Views
    path(r'app/', views.MyReactView.as_view(), name='react_app'),  
    path(r'app/<path:path>', views.MyReactView.as_view(), name='react_app_with_path'),    
]
