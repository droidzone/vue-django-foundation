from django.db import models
from django.utils import timezone

def shortlinkgen():
    import secrets
    return secrets.token_urlsafe(2)




# Create your models here.
class ShortLink(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    short_link = models.CharField(max_length=150, unique=True)
    long_link = models.CharField(max_length=500, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey( 
        'auth.User',  
        related_name='shortlinks', 
        on_delete=models.CASCADE) 

    def __str__(self):
        return self.short_link

    def getshortlink(self, longlink):
        links = Links.objects.filter(longlink=longlink)
        if len(links) > 1 or len(links) == 1:
            link = links[0].shortlink
        else:
            link = Links(longlink=longlink, shortlink=shortlinkgen(),
                        createdate=DateToday())
            link.save()
            link = link.shortlink
        return 'https://emr.cx/'+link