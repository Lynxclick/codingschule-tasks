from multiprocessing.sharedctypes import Value
from django.shortcuts import render, redirect
from .models import Customer
from .models import Post
from .models import Like
#from api.models import Expense
from django.http import HttpResponse
from django.core import serializers
#from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import LikeSerializer, PostSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny



# Create your views here.
def index(request):

#     context = {
#         "posts": [
#             {"id": 1, "author": "Ada Lovelace", "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores"},
#             {"id": 2, "author": "Bill Gates", "text": "Der Computer wurde zur Lösung von Problemen erfunden, die es früher nicht gab."}
#         ]
#     }
    
    customers = Customer.objects.all()
    context = {
        "customer" : customers
    }

    posts = Post.objects.all()
    context = {
        "posts" : posts
    }


    return render(request, "api/index.html", context)


def api_new(request, name):
    new_post = Post(user=name, text=request.GET["text"])
    new_post.save()

    return redirect('/')

def api_get(request):
    posts = Post.objects.all()
    data = serializers.serialize("json", posts)

    return HttpResponse(data, content_type="application/json")

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def api_view(request):

        

    if request.method == 'POST':
        # neuer Post
        # request.data
        new_post = Post(user=request.user, text=request.data["text"])
        #new_post = PostSerializer(data=request.data)
        #new_post.user = request.user
        #new_post.is_valid(raise_exception=True)
        new_post.save()

        #posts = Post.objects.all()
        posts = Post.objects.order_by("-created_at")
        serializer = PostSerializer(posts, many=True) #serializer für Umwandlung in JSON
        return Response(serializer.data)
    elif request.method == 'GET':
        #Alle Posts laden
        posts = Post.objects.order_by("-created_at")
        serializer = PostSerializer(posts, many=True)   
        return Response(serializer.data)

""" def api_like(request):
    user = request.user
    if request.method == 'POST':
        post_id = request.POST.get('post_id')
        post_obj = Post.objects.get(id=post_id)

        if user in post_obj.liked.all():
            post_obj.liked.remove(user)
        else:
            post_obj.liked.add(user)

        like, created = Like.objects.get_or_create(user=user, post_id=post_id)

        if not created:
            if like.value == 'Like':
                like.value = 'Unlike'
            else:
                like.value = 'Like'

        like.save()
    return redirect('posts:post-list') """


def api_like(request):
    if request.method == 'POST':
        new_like = Like(user=request.user, post=request.data)
        new_like.save()
        likes = Like.objects
        serializer = LikeSerializer(likes, many=True)
        return Response(serializer.data)
    
    elif request.method == 'GET':
        likes = Like.objects
        serializer = LikeSerializer(likes, many=True)
        return Response(serializer.data)



