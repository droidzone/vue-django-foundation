from django.shortcuts import render
# from itsdangerous import exc
from rest_framework import viewsets
from clinic.models import ShortLink
from .serializers import ShortLinkSerializer
from rest_framework.decorators import action
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from django.core.exceptions import ValidationError





# Create your views here.
class ShortLinkViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing short links.
    """
    # authentication_classes = [SessionAuthentication, BasicAuthentication]
    print("In class ShortLinkViewSet...")
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    queryset = ShortLink.objects.all()
    serializer_class = ShortLinkSerializer

    @action(detail=True, methods=['get'])
    def list_all_links(self, request, pk=None):
        print("\nIn list_all_links...\n")
        try:
            link = self.get_object()
            print("link", link)

        except Exception as e:
            print("Exception occured while listing links..")
            print(str(e))


class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        print("In CustomAuthToken:post...")
        print(request.method)
        print(request.POST)
        print('Headers:', request.headers)
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        # serializer.is_valid(raise_exception=True)
        if not serializer.is_valid():
            print("Serializer error:", serializer.errors)
            raise ValidationError(serializer.errors)
        print("Is valid serializer?")
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        print("Returning token")
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })
