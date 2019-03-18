from django.shortcuts import render

# Create your views here.

def retorna_3r(request):
        return render(request, '3r.html')