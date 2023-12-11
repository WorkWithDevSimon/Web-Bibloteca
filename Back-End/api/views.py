from api.serializer import LibroSerializer
from api.models import Libro
from rest_framework.views import APIView

from rest_framework.response import Response


class LibrosView(APIView):
    def get(self,request):
        libros = Libro.objects.all()
        serializer = LibroSerializer(libros, many=True)
        return Response(serializer.data)
    
    
