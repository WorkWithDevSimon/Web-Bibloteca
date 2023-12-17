from api.models import Estado, Libro, Reserva, Socio, Token
from rest_framework import serializers
from datetime import datetime


class LibroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libro
        fields = "__all__"


class SocioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Socio
        fields = "__all__"


class ReservaSerializer(serializers.ModelSerializer):
    def validate(self, data):
        print(data)
        if datetime.now().date() > data["fecha_devolucion"]:
            raise serializers.ValidationError(
                "La fecha de inicio no puede ser mayor a la de devolución."
            )
        if data["estado"].nombre == "Atrasada":
            if data["fecha_devolucion"] < datetime.now().date():
                raise serializers.ValidationError(
                    "La fecha de devolucion aún no se ha cumplido."
                )
        return data

    def validate_libro(self, value):
        if not value.disponible:
            raise serializers.ValidationError("El libro no está disponible")
        else:
            return value

    def validate_socio(self, value):
        if not Token.objects.filter(socio=value).exists():
            raise serializers.ValidationError(
                "El socio seleccionado no está autenticado"
            )
        reservas_usuario = Reserva.objects.filter(socio=value)
        for r in reservas_usuario:
            if r.estado.nombre == "Atrasada":
                raise serializers.ValidationError(
                    "El socio seleccionado tiene una reserva atrasada"
                )
        return value

    class Meta:
        model = Reserva
        fields = "__all__"


class EstadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estado
        fields = "__all__"


class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = "__all__"


class SerializarDatosReservasObtenrTituloAutorImg(serializers.ModelSerializer):
    libro_titulo = serializers.CharField(source="libro.titulo", read_only=True)
    libro_id = serializers.CharField(source="libro.id", read_only=True)
    libro_autor = serializers.CharField(source="libro.autor", read_only=True)
    libro_imagenURL = serializers.CharField(source="libro.imagenURL", read_only=True)
    estado_nombre = serializers.CharField(source="estado.nombre", read_only=True)
    class Meta:
        model = Reserva
        fields = [
            "id",
            "libro_titulo",
            "libro_id",
            "libro_autor",
            "libro_imagenURL",
            "fecha_inicio",
            "fecha_devolucion",
            "socio",
            "estado_nombre",
        ]


 