from django.shortcuts import render
from rest_framework import viewsets
from clinic.models import ShortLink
from .serializers import ShortLinkSerializer
from rest_framework.decorators import action
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response




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

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        print("In CustomAuthToken:post...")
        print(request.POST)
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        # serializer.is_valid(raise_exception=True)
        if not serializer.is_valid():
            print(serializer.errors)
            raise ValidationError(serializer.errors)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })