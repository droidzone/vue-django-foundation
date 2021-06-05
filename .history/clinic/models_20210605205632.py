from django.db import models
from django.utils import timezone

def shortlinkgen():
    import secrets
    return secrets.token_urlsafe(2)




# Create your models here.
class ShortLink(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    short_link = models.CharField(max_length=150, unique=True, blank=True, null=True)
    long_link = models.CharField(max_length=500, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey( 
        'auth.User',  
        related_name='shortlinks', 
        on_delete=models.CASCADE,blank=True, null=True) 

    def __str__(self):
        return self.short_link

    def save(self, *args, **kwargs):
        host_prefix='https://emr.cx/'
        if not self.short_link:
            shortstr = shortlinkgen()
            self.short_link = host_prefix + shortstr

    # def getshortlink(self, long_link):
    #     links = ShortLink.objects.filter(long_link=long_link)
    #     if len(links) > 1 or len(links) == 1:
    #         link = links[0].short_link
    #     else:
    #         link = ShortLink(long_link=long_link, shortlink=shortlinkgen(),
    #                  )
    #         link.save()
    #         link = link.shortlink
    #     return 'https://emr.cx/'+link