from django.urls import path
from api import views

urlpatterns = [
    path('', views.index),
    path('api/posts', views.api_get),
    path('new/<str:name>/', views.api_new),
    path('api2/posts', views.api_view),
    path('api/like', views.api_like),
]