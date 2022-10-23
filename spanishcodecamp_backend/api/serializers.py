from rest_framework import serializers

from api.models import CompletedLevel, Course, CourseBought, Level, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "username", "email"]
        extra_kwargs = {
            "first_name": {"required": True},
            "last_name": {"required": True},
            "email": {"required": True},
        }


class CourseBoughtSerializer(serializers.ModelField):
    class Meta:
        model = CourseBought
        fields = "__all__"


class CompletedLevelSerializer(serializers.ModelField):
    class Meta:
        model = CompletedLevel
        fields = "__all__"


class LevelSerializer(serializers.ModelSerializer):
    class Level:
        model = Level
        fields = "__all__"


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = "__all__"
