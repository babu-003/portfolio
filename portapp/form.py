from django import forms
from portapp.models import portmodel

class portform(forms.Modelform):
    class Meta:
        model=portmodel
        fields="__all__"