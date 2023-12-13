from django.db import models


class Libro(models.Model):
    titulo = models.CharField(max_length=50)
    autor = models.CharField(max_length=50)
    editorial = models.CharField(max_length=50)
    coleccion = models.CharField(max_length=50)
    año = models.CharField(max_length=10)
    paginas = models.CharField(max_length=10)
    imagenURL = models.CharField(max_length=200)
    disponible = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.titulo


class Socio(models.Model):
    username = models.CharField(max_length=50)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    usuario = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    password = models.CharField(max_length=254)

    def __str__(self) -> str:
        return f"{self.nombre} {self.apellido}"


class Estado(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.nombre


class Reserva(models.Model):
    libro = models.ForeignKey(Libro, on_delete=models.CASCADE)
    socio = models.ForeignKey(Socio, on_delete=models.CASCADE)
    fecha_inicio = models.DateField(auto_now=True, auto_now_add=False)
    fecha_devolucion = models.DateField(auto_now=False, auto_now_add=False)
    estado = models.ForeignKey(Estado, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"{self.libro}, {self.fecha_inicio} a {self.fecha_devolucion}, Socio: {self.socio}, Estado: {self.estado}"

class Token(models.Model):
    token = models.CharField(max_length=22, unique=True, null=False)
    socio = models.ForeignKey(Socio, on_delete=models.CASCADE, unique=True, null=False)