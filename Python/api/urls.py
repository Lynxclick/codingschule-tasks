from django.urls import path
from api import views

urlpatterns = [
    path('', views.index),
    path('new/<str:name>/', views.api_new),
]