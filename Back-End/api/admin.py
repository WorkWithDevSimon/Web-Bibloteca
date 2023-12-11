from django.contrib import admin

# Register your models here.
from .models import Estado, Libro, Reserva, Socio

admin.site.register(Libro)
admin.site.register(Socio)
admin.site.register(Reserva)
admin.site.register(Estado)