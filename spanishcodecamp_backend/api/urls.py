from django.urls import include, path
from rest_framework import routers

from api.views import CompletedLevelView, CourseView, LoginView, register

router = routers.DefaultRouter()

router.register("courses", CourseView, "courses")
router.register("completed_levels", CompletedLevelView)

urlpatterns = [
    path(r"", include(router.urls)),
    path(r"login/", LoginView.as_view(), name="knox_login"),
    path(r"register/", register),
]
