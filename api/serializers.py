from django.db import models
from rest_framework import serializers
from clinic.models import ShortLink

class ShortLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShortLink
        fields = [
            'id', 
            'short_link', 
            'long_link', 
            'created_at', 
            'modified_at',
        ]