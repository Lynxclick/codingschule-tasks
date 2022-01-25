from .models import Post
from rest_framework import serializers

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"

class NewPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["author", "user", "text"]