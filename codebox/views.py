from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.http import HttpResponseRedirect

from .forms import NameForm

def index(request):

    return HttpResponse("type your code here")

def get_name(request):
    # if this is a POST request we need to process the form data
        # create a form instance and populate it with data from the request:
    form = NameForm(request.POST)
    # check whether it's valid:
    if form.is_valid():
        # process the data in form.cleaned_data as required
        # ...
        # redirect to a new URL:
        return HttpResponseRedirect('/thanks/')

    # if a GET (or any other method) we'll create a blank form


    return render(request, 'code.html', {'form': form})