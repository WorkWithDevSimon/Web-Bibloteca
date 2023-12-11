from api.models import Estado, Libro, Reserva, Socio
from rest_framework import serializers

class LibroSerializer(serializers.Serializer):
    class Meta:
        model = Libro
        field = '__all__'

class SocioSerializer(serializers.Serializer):
    class Meta:
        model = Socio
        field = '__all__'

class ReservaSerializer(serializers.Serializer):
    class Meta:
        model = Reserva
        field = '__all__'

class EstadoSerializer(serializers.Serializer):
    class Meta:
        model = Estado
        field = '__all__'