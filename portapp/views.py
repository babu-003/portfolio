from django.shortcuts import render
from portapp.models import portmodel

def display(request):
    if request.method=='POST':
        name=request.POST.get('name')
        email=request.POST.get('email')
        message=request.POST.get('messsage')
        portmodel.objects.create(name=name,email=email,messsage=message)
        return render(request,"temapp/index.html",{'hi':"message sent"})
    return render(request,"temapp/index.html")
def base(request):
   
    return render(request,"temapp/base.html")
# Create your views here.
