from django.db import models

class Libro(models.Model):
    titulo = models.CharField(max_length=50)
    disponible = models.BooleanField()

    def __str__(self) -> str:
        return self.titulo

class Socio(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)

class Estado(models.Model):
    nombre = models.CharField(max_length=50)

class Reserva(models.Model):
    libro_id = models.ForeignKey(Libro, on_delete=models.CASCADE)
    socio_id = models.ForeignKey(Socio, on_delete=models.CASCADE)
    fecha_inicio = models.DateField(auto_now=True, auto_now_add=False)
    fecha_devolucion = models.DateField(auto_now=False, auto_now_add=False)
    estado = models.ForeignKey(Estado, on_delete=models.CASCADE)
