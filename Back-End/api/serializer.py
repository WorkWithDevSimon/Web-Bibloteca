from api.models import Estado, Libro, Reserva, Socio, Token
from rest_framework import serializers
from datetime import datetime

class LibroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libro
        fields = '__all__'
    
class SocioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Socio
        fields = '__all__'

class ReservaSerializer(serializers.ModelSerializer):
    def validate(self, data):
        print(data)
        if datetime.now().date() > data['fecha_devolucion']:
            raise serializers.ValidationError("La fecha de inicio no puede ser mayor a la de devolución.")

        if data["estado"].nombre == "Atrasada":
            if data["fecha_devolucion"] < datetime.now().date():
                raise serializers.ValidationError("La fecha de devolucion aún no se ha cumplido.")
            else:
                return data

    def validate_libro(self, value):
        if not value.disponible:
            raise serializers.ValidationError("El libro no está disponible")
        else: return value

    def validate_socio(self, value):
        if not Token.object.filter(socio=value).exists():
            raise serializers.ValidationError("El socio seleccionado no está autenticado")

        reservas_usuario = Reserva.objects.filter(socio = value)
        for r in reservas_usuario:
            if r.estado.nombre == "Atrasada":
                raise serializers.ValidationError("El socio seleccionado tiene una reserva atrasada")
        return value
    

    
    
    class Meta:
        model = Reserva
        fields = '__all__'

class EstadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estado
        fields = '__all__'

class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = '__all__'