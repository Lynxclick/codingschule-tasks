from django.contrib import admin

from .models import Customer, Post, Like


# Register your models here.

#admin.site.register(Customer)
admin.site.register(Post)
admin.site.register(Like)