from django.contrib.auth import login
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from knox.views import LoginView as KnoxLoginView
from rest_framework import status
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from rest_framework.response import Response

from api.models import User
from api.serializers import UserSerializer
from api.utils import ResponseBadRequest, key_error_as_response_bad_request

# Create your views here.


@api_view(["POST"])
@authentication_classes([])
@permission_classes([])
@key_error_as_response_bad_request
def register(request):
    data = dict(request.data)
    password1 = data.pop("password1")
    password2 = data.pop("password2")

    if password1 != password2:
        return ResponseBadRequest({"password2": "Las contraseñas no coinciden"})

    password = password1

    user_serializer = UserSerializer(data=data)
    user_serializer.is_valid(raise_exception=True)

    user_instance = User(**user_serializer.validated_data)
    try:
        validate_password(password, user_instance)
    except ValidationError as e:
        return ResponseBadRequest({"password1": e})

    user_instance.set_password(password)
    user_instance.save()
    return Response(
        UserSerializer(user_instance).data,
        status=status.HTTP_201_CREATED,
    )


class LoginView(KnoxLoginView):
    authentication_classes = []
    permission_classes = []

    def get_user_serializer_class(self):
        return UserSerializer

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        login(request, user)
        return super(LoginView, self).post(request, format=format)
