from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# class Expense(models.Model):
#     datetime = models.DateTimeField()
#     name = models.CharField(max_length=100)
#     amount = models.FloatField()

class Customer(models.Model):
    first_name = models.CharField(max_length=200, null=True, blank=True)
    last_name = models.CharField(max_length=200)
    mail = models.EmailField()

class Post(models.Model):
    author = models.CharField(max_length=255)
    text = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default="1")

    def __str__(self):
        return self.text

class Like(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='likes')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user.username)