from django.contrib.auth import login
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from knox.views import LoginView as KnoxLoginView
from rest_framework import mixins, status
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from api.models import CompletedLevel, Course, Level, User
from api.serializers import CourseSerializer, LevelSerializer, UserSerializer
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


class CourseView(GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Course.objects
    serializer_class = CourseSerializer

    def retrieve(self, request, *args, **kwargs):
        instance: Course = self.get_object()

        context = self.get_serializer_context()
        context["detailed"] = True
        return Response(self.get_serializer(instance, context=context).data)


class LevelView(GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Level.objects
    serializer_class = LevelSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        context = self.get_serializer_context()
        context["detailed"] = True
        serializer = self.get_serializer(instance, context=context)
        return Response(serializer.data)


class CompletedLevelView(
    GenericViewSet,
    mixins.RetrieveModelMixin,
    mixins.CreateModelMixin,
    mixins.UpdateModelMixin,
):
    queryset = CompletedLevel.objects

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(user=self.request.user)

    def create(self, request, *args, **kwargs):
        data = dict(request.data)
        data["user"] = request.user.id
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )
