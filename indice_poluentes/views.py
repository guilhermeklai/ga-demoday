from django.shortcuts import render

# Create your views here.

def retorna_poluentes(request):
        return render(request, 'poluentes.html')