from api.models import Estado, Libro, Reserva, Socio
from rest_framework import serializers

class LibroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libro
        field = '__all__'
class SocioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Socio
        field = '__all__'

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        field = '__all__'

class EstadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estado
        field = '__all__'