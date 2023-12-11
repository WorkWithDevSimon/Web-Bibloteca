 
from api import views
from django.contrib import admin
from django.urls import  path
 
urlpatterns = [
    path('admin/', admin.site.urls),
    # --------------------------------------------------------
    path("Librerias/",views.LibrosView.as_view() ),
    path("LibreriasId/<int:pk>",views.LibrosViewId.as_view() ),
    # --------------------------------------------------------
    path("Socios/",views.SociosView.as_view() ),
    path("SociosId/<int:pk>",views.SociosViewId.as_view() ),
    # --------------------------------------------------------------------
    path("Reservas/",views.ReservasView.as_view() ),
    path("Reservas/<int:pk>",views.ReservasViewId.as_view() ),
    # --------------------------------------------------------------------
    path("EstadosView/",views.EstadosView.as_view() ),
    path("EstadosViewId/<int:pk>",views.EstadosViewId.as_view() )
 ]
