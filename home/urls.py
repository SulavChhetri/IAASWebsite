from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
   path('', views.index, name='home'),
   path('about/',views.about, name='about'),
   path('posts/',views.posts, name='posts'),
   path('posts/<slug:slug>', views.postpage, name='postpage')
]
