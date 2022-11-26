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
    class Meta:
        model = Level
        fields = "__all__"

    def to_representation(self, instance):
        obj = super().to_representation(instance)
        with open(obj["instructions"], "r") as file:
            obj["instructions"] = file.read()

        with open(obj["tests"], "r") as file:
            obj["tests"] = file.read()

        return obj


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course

    def to_representation(self, instance: Course):
        obj = super().to_representation(instance)
        if self.context.get("detailed") is True:
            obj["levels"] = LevelSerializer(instance.levels.all(), many=True).data
        obj["language_verbose"] = instance.get_language_display()
        obj["estimated_duration"] = instance.course_duration
        return obj
