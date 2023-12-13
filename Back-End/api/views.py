from rest_framework.response import Response
from api.serializer import (
    EstadoSerializer,
    LibroSerializer,
    ReservaSerializer,
    SocioSerializer,
)
from api.models import Estado, Libro, Reserva, Socio
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
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
            Libro.objects.get(pk)
        except Libro.DoesNotExist:
            return Http404

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
