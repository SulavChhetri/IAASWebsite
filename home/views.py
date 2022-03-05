from django.shortcuts import render, HttpResponse
from . import models
# Create your views here.

def index(request):
    posts = models.Posts.objects.all()[0:5]
    return render(request, 'index.html', {'posts': posts})

def about(request):
    return render(request, 'about.html')

def posts(request):
    posts = models.Posts.objects.all()
    return render(request, 'post.html', {'posts': posts})

def postpage(reqest, slug):
    slug = slug.replace("-", " ")
    post = models.Posts.objects.get(title=slug)
    return render(reqest, 'postpage.html', {'post': post})