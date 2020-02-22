from django.urls import path
from space import views
urlpatterns = [
    path('', views.index, name='home'),
]

