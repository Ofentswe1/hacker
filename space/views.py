from django.shortcuts import render

# Create your views here.
def index(request):
    # if request.method == "POST":
	#print request.FILES.get('images')
    return render(request, './space/index.html')


def about(request):
    return render(request, './space/charts.c3.html')


def detail(request):
    return render(request, './space/ui.tabs.html')

