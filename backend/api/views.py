from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView, 
    RetrieveAPIView, 
    CreateAPIView, 
    UpdateAPIView, 
    DestroyAPIView,
)
#CRUD
from .models import Product
from .serialize import ProductSerialize

class ProductListAPIView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerialize

class ProductDetailAPIView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerialize

class ProductCreateAPIView(CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerialize

class ProductUpdateAPIView(UpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerialize

class ProductDeleteAPIView(DestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerialize