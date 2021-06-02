from django.contrib import admin

# Register your models here.
from .models import ShortLink

@admin.register(ShortLink)
class ShortLinkAdmin(admin.ModelAdmin):
    # fields = ('brandname', 'genericname')
    ordering = ['id']
    search_fields = [
        'id', 'short_link', 'long_link', 'created_at', 'modified_at'
        ]
    list_display = (
        'id', 'short_link', 'long_link', 'created_at', 'modified_at'
        )
