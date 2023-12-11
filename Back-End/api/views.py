from urllib import response
from api.serializer import LibroSerializer
from api.models import Libro
from django.shortcuts import render
from rest_framework import APIview

class LibrosView(APIview):
    def get(self):
        libros = Libro.objects.all()
        serializer = LibroSerializer(libros, many=True)
        return response(serializer.data)
    
    
