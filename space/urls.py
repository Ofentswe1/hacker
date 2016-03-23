from django.conf.urls import url
import views
urlpatterns = [
    url(r'^$', views.index, name='home'),
    url(r'^about', views.about, name='about'),
    url(r'^detail', views.detail,  name='detail'),
    #url(),
]

