from rest_framework.response import Response
from api.serializer import (
    EstadoSerializer,
    LibroSerializer,
    ReservaSerializer,
    SocioSerializer,
    TokenSerializer,
)
from api.models import Estado, Libro, Reserva, Socio, Token
from django.db.models import Count
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import action, api_view, renderer_classes
from django.http import Http404
from secrets import token_urlsafe


from django.http import Http404


class LibrosView(APIView):
    def get(self, request):
        libros = Libro.objects.all()
        serializer = LibroSerializer(libros, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = LibroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LibrosViewId(APIView):
    def get_object(self, pk):
        try:
            return Libro.objects.get(pk=pk)
        except Libro.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        libro = self.get_object(pk)
        serializer = LibroSerializer(libro)
        return Response(serializer.data)

    def put(self, request, pk):
        libro = self.get_object(pk)
        serializer = LibroSerializer(libro, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        libro = self.get_object(pk)
        libro.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class SociosView(APIView):
    def get(self, request):
        socios = Socio.objects.all()
        serializer = SocioSerializer(socios, many=True)  # Corregir aquí
        return Response(serializer.data)

    def post(self, request):
        serializer = SocioSerializer(data=request.data)
        serializer.initial_data["password"] = make_password(
            serializer.initial_data["password"]
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SociosViewId(APIView):
    def get_object(self, pk):
        try:
            Socio.objects.get(pk)
        except Socio.DoesNotExist:
            return Http404

    def get(self, request, pk):
        socio = self.get_object(pk)
        serializer = SocioSerializer(socio)
        return Response(serializer.data)

    def put(self, request, pk):
        socio = self.get_object(pk)
        serializer = SocioSerializer(socio, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        socio = self.get_object(pk)
        socio.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ReservasView(APIView):
    def get(self, request):
        reserva = Reserva.objects.all()
        serializer = ReservaSerializer(reserva, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ReservaSerializer(data=request.data)
        if serializer.initial_data["socio"]:
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ReservasViewId(APIView):
    def get_object(self, pk):
        try:
            Reserva.objects.get(pk)
        except Reserva.DoesNotExist:
            return Http404

    def get(self, request, pk):
        reserva = self.get_object(pk)
        serializer = ReservaSerializer(reserva)
        return Response(serializer.data)

    def put(self, request, pk):
        reserva = self.get_object(pk)
        serializer = LibroSerializer(reserva, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        reserva = self.get_object(pk)
        reserva.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class EstadosView(APIView):
    def get(self, request):
        estado = Estado.objects.all()
        serializer = EstadoSerializer(estado, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EstadoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EstadosViewId(APIView):
    def get_object(self, pk):
        try:
            Estado.objects.get(pk)
        except Estado.DoesNotExist:
            return Http404

    def get(self, request, pk):
        estado = self.get_object(pk)
        serializer = EstadoSerializer(estado)
        return Response(serializer.data)

    def put(self, request, pk):
        estado = self.get_object(pk)
        serializer = EstadoSerializer(estado, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        estado = self.get_object(pk)
        estado.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(("POST",))
def login(request):
    username = request.data["usuario"]
    password = request.data["password"]
    filtro = Socio.objects.filter(usuario=username)
    if filtro.exists():
        socio = filtro.first()
        if check_password(password, socio.password):
            token = Token.objects.filter(socio=socio)
            if token.exists():
                serializer = TokenSerializer(token.first())
                return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
            else:
                token = Token(token=token_urlsafe(16), socio=socio)
                serializer = TokenSerializer(token)
                token.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(
                {"error": "Contraseña incorrecta"}, status=status.HTTP_400_BAD_REQUEST
            )
    return Response({"error": "Usuario no Existe"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(("GET",))
def libro_mas_popular(request):
    reservas = (
        Reserva.objects.values("libro").annotate(num_reservas=Count("libro")).order_by()
    )
    maximo = {"num_reservas": 0}
    for libro in reservas:
        if libro["num_reservas"] > maximo["num_reservas"]:
            maximo = libro
    if "libro" in maximo:
        maximo["libro"] = LibroSerializer(Libro.objects.get(id=maximo["libro"])).data
        return Response(maximo, status=status.HTTP_200_OK)
    else:
        return Response(
            {"error": "No se encontraron registros"}, status=status.HTTP_400_BAD_REQUEST
        )
