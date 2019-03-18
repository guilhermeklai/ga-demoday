from django.shortcuts import render

# Create your views here.


def retorna_quem_somos(request):
    return render(request, 'quem_somos.html')