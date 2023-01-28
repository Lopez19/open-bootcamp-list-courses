from django.urls import path
from . import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<pk>', views.DirectorView.as_view(), name='detalles_director'),
    path('pelicula/<pk>', views.PeliculaView.as_view(), name='detalles_pelicula'),
]
