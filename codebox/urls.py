from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='code'),
    path('',views.get_name,name='textbox')
]