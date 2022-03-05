from django.db import models

class Posts(models.Model):
    title = models.CharField(max_length=255)
    thumbnail = models.ImageField(upload_to='static/img/')
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    
    def slug(self):
        return self.title.replace(" ", "-")
    
    def __str__(self):
        return self.title