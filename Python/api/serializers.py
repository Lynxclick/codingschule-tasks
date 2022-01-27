from .models import Post, User
from rest_framework import serializers


#class NewPostSerializer(serializers.ModelSerializer):
#    class Meta:
#        model = Post
#        fields = ["author", "user", "text"]

class UserSerialzier(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username"]

class PostSerializer(serializers.ModelSerializer):
    user = UserSerialzier()
    class Meta:
        model = Post
        #fields = "__all__"
        exclude = ["author"]