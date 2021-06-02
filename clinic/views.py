from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def home(request):
    return render(request, 'clinic/index.html') 

def main(request):
    return render(request, 'clinic/index.html') 
# static/clinic/vue/dist/index.html
# 'clinic/index.html'
