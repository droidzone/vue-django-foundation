from django.shortcuts import render
from rest_framework import viewsets
from clinic.models import ShortLink
from .serializers import ShortLinkSerializer
from rest_framework.decorators import action
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken




# Create your views here.
class ShortLinkViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing short links.
    """
    # authentication_classes = [SessionAuthentication, BasicAuthentication]

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    queryset = ShortLink.objects.all()
    serializer_class = ShortLinkSerializer

    @action(detail=True, methods=['post'])
    def list_all_links(self, request, pk=None):
        link = self.get_object()
        print("link", link)
