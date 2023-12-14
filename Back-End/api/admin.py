from django.contrib import admin

# Register your models here.
from .models import Estado, Libro, Reserva, Socio, Token

admin.site.register(Libro)
admin.site.register(Socio)
admin.site.register(Reserva)
admin.site.register(Estado)
admin.site.register(Token)