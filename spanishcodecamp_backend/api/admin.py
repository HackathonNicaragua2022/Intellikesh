from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from api.forms import CourseForm, LevelForm
from api.models import CompletedLevel, Course, CourseBought, Level, User

admin.site.register(User, UserAdmin)


class ReadOnlyAdmin(admin.ModelAdmin):
    def has_add_permission(self, request) -> bool:
        return False

    def has_change_permission(self, request, obj=...) -> bool:
        return False

    def has_delete_permission(self, request, obj=...) -> bool:
        return False


@admin.register(Level)
class LevelAdmin(admin.ModelAdmin):
    fields = [
        "title",
        "course",
        "position",
        "estimated_duration",
        "instructions",
        "tests",
    ]
    list_display = [
        "title",
        "course",
        "position",
        "estimated_duration",
        "instructions",
    ]
    list_filter = ["course"]
    search_fields = ["title", "course"]
    form = LevelForm


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    fields = ["title", "description", "language", "course_price"]
    list_display = ["title", "description", "language", "course_price"]
    search_fields = ["title"]
    list_filter = ["language", "course_price"]

    form = CourseForm


@admin.register(CourseBought)
class CourseBoughtAdmin(admin.ModelAdmin):
    ...


@admin.register(CompletedLevel)
class CompletedLevelAdmin(ReadOnlyAdmin):
    ...
