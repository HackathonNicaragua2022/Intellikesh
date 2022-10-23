from django.urls import path

from api.views import LoginView, register

urlpatterns = [
    path(r"login/", LoginView.as_view(), name="knox_login"),
    path(r"register/", register),
]
