from django.contrib import admin
from portapp.models import portmodel
# Register your models here.
class portadmin(admin.ModelAdmin):
    List=["name","email","message"]
admin.site.register(portmodel,portadmin)
