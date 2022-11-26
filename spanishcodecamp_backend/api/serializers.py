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

        try:
            completed_level_instance = CompletedLevel.objects.get(
                user=self.context["request"].user, level=instance
            )
            obj["is_solved_by_request_user"] = True
        except CompletedLevel.DoesNotExist:
            completed_level_instance = None
            obj["is_solved_by_request_user"] = False

        if self.context.get("detailed") is True:

            obj["completed_level_info"] = (
                CompletedLevelSerializer(
                    completed_level_instance, context=self.context
                ).data
                if completed_level_instance is not None
                else {}
            )

        return obj


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = "__all__"

    def to_representation(self, instance: Course):
        obj = super().to_representation(instance)
        if self.context.get("detailed") is True:
            obj["levels"] = LevelSerializer(
                instance.levels.all(), many=True, context=self.context
            ).data
        obj["language_verbose"] = instance.get_language_display()
        obj["estimated_duration"] = instance.course_duration
        return obj
