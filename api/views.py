from http.client import HTTPResponse
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
from django.core.exceptions import ValidationError
from rest_framework import status
from django.http import Http404, HttpResponse, HttpResponseRedirect, QueryDict

def faviconfix(request):
    return HTTPResponse('')

# Create your views here.
class ShortLinkViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions. A viewset for viewing and editing short links.
    """
    # authentication_classes = [SessionAuthentication, BasicAuthentication]
    print("In class ShortLinkViewSet...")
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = ShortLink.objects.all()
    serializer_class = ShortLinkSerializer

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        print(f"About to remove the instance: {instance}")
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def create(self, request, *args, **kwargs):
        if request.data.get('id'):
            return super(ShortLinkViewSet, self).update(request, *args, **kwargs)
        else:
            return super(ShortLinkViewSet, self).create(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        print("In put method..")
        print("data:", request.data)
        pk = request.data['params']['pk']
        print("pk:", pk)
        mydata = request.data['params']['link']
        instance = ShortLink.objects.get(pk=pk)
        print("Original long link:", instance.long_link)
        # instance.long_link = mydata['long_link']
        print("Updating data:", mydata['long_link'])
        # print("Saving")

        # serializer = ShortLinkSerializer(instance, data=mydata)
        # if serializer.is_valid():
        #     print("Serializer is valid. Saving..")
        #     try:
        #         serializer.save()
        #         print("Saved updated short link")
        #         return Response(serializer.data, status=status.HTTP_201_CREATED)
        #     except Exception as e:
        #         print(f"Exception occurrance stalled: {str(e)}")
        # else:
        #     print("Serializer is NOT valid. ")
        #     print(serializer.errors)
        #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        try:
            # instance.save()
            ShortLink.objects.filter(pk=pk).update(long_link=mydata['long_link'])
            newlink = ShortLink.objects.get(pk=pk)
            print("Updated link")
            serializer = ShortLinkSerializer(newlink)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            print("An error occured updating link")
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)


    def post(self, request, *args, **kwargs):
        print("In post method..")
        print("request", request)
        print(dir(request))
        print("Params:", request.query_params)
        instance = self.get_object()
        print(instance)

        # Update the Foo instance
        # instance.title = validated_data['title']
        # instance.save()
        # return instance
        # serializer = self.get_serializer(data=request.data)
        # serializer.is_valid(raise_exception=True)
        # self.perform_create(serializer)
        # headers = self.get_success_headers(serializer.data)
        # return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    # @action(detail=True, methods=['get'])
    # def list_all_links(self, request, pk=None):
    #     print("\nIn list_all_links...\n")
    #     try:
    #         link = self.get_object()
    #         print("link", link)

    #     except Exception as e:
    #         print("Exception occured while listing links..")
    #         print(str(e))


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
