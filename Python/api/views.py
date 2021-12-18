from django.shortcuts import render
from .models import Customer
from .models import Post
#from api.models import Expense
#from django.http import HttpResponse

# Create your views here.
def index(request):

    # context = {
    #     "posts": [
    #         {"id": 1, "author": "Ada Lovelace", "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores"},
    #         {"id": 2, "author": "Bill Gates", "text": "Der Computer wurde zur Lösung von Problemen erfunden, die es früher nicht gab."}
    #     ]
    # }
    
    customers = Customer.objects.all()
    context = {
        "customer" : customers
    }

    posts = Post.objects.all()
    context = {
        "posts" : posts
    }


    return render(request, "api/index.html", context)


