from django import forms
from contato_page.models import Contato

class ContatoCriarForm(forms.ModelForm):
        class Meta:
                model = Contato
                fields = [
                        'nome',
                        'email',
                        'assunto',
                        'descricao',
                ]