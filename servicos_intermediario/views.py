from django.shortcuts import render

# Create your views here.

def retorna_projeto_intermediario(request):
        return render(request, 'servicos.html')