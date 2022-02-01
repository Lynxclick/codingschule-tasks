from .models import Post, User, Like
from rest_framework import serializers


#class NewPostSerializer(serializers.ModelSerializer):
#    class Meta:
#        model = Post
#        fields = ["author", "user", "text"]

class UserSerialzier(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username"]

class LikeSerializer(serializers.ModelSerializer):
    user = UserSerialzier()
    class Meta:
        model = Like
        fields = ["user"]

class PostSerializer(serializers.ModelSerializer):
    user = UserSerialzier()
    likes = serializers.StringRelatedField(many=True, read_only=True)
    #likes = LikeSerializer(many=True, read_only=True)
    class Meta:
        model = Post
        #fields = "__all__"
        exclude = ["author"]