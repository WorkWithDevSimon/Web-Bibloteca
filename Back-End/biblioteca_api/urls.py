from api import views
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path("admin/", admin.site.urls),
    # --------------------------------------------------------
    path("Librerias/", views.LibrosView.as_view()),
    path("Librerias/<int:pk>/", views.LibrosViewId.as_view()),
    # --------------------------------------------------------
    path("Socios/", views.SociosView.as_view()),
    path("SociosId/<int:pk>", views.SociosViewId.as_view()),
    # --------------------------------------------------------------------
    path("Reservas/", views.ReservasView.as_view()),
    path("Reservas/<int:pk>/", views.ReservasViewId.as_view()),
    # --------------------------------------------------------------------
    path("Estados/", views.EstadosView.as_view()),
    path("EstadosId/<int:pk>", views.EstadosViewId.as_view()),
    # --------------------------------------------------------------------
    path("login/", views.login),
    # -------------------------------------------------------------------------
    path("obtener_reservas_con_libros/", views.obtener_reservas_con_libros),
    # -------------------------URL DE REPORTE DEL LIBRO MAS POPULAR------------------------------------------------
    path("libro_mas_popular/", views.libro_mas_popular),
    # ----------------------------------URL DE REPORTE DE DISPONIBILIDAD DE LIBROS---------------------------------------
    path("LibrosDiesponiblesView/", views.LibrosDiesponiblesView),
    # ----------------------------------URL DE REPORTE DEl LIBRO por autor---------------------------------------
    path("libros_por_autor/", views.libros_por_autor),
    # ----------------------------------URL DE REPORTE DE NO DISPONIBILIDAD DE LIBROS---------------------------------------
    path("LibrosNoDiesponiblesView/", views.LibrosNoDiesponiblesView),
    # ---------------------------------------------------
    path("socios_con_libros_reservados/", views.socios_con_libros_reservados),
]
