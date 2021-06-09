from django.shortcuts import render
from django.http import HttpResponse
from .models import ShortLink


# Create your views here.
def home(request):
    return render(request, 'clinic/index.html') 

def main(request):
    return render(request, 'clinic/index.html') 
# static/clinic/vue/dist/index.html
# 'clinic/index.html'

def catchlink(request, shortlink):
    print("In catchlink")
    print(shortlink)
    try:
        item = ShortLink.objects.get(short_link = shortlink)
        msg = f'Short link: {item.short_link} Expanded:{item.long_link}'
        return redirect(item.long_link)
    except Exception as e:
        msg = 'Short link not valid.'
        print(str(e))

    
    return HttpResponse(msg)