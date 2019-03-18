from django.shortcuts import render

# Create your views here.

def retorna_servicos_intermediario(request):
        return render(request, 'servicos.html')