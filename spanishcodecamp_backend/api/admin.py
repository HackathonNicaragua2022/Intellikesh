from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

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
class LevelAdmin(ReadOnlyAdmin):
    fields = ["title", "course", "position", "estimated_duration"]
    list_display = ["title", "course", "position", "estimated_duration"]


@admin.register(Course)
class CourseAdmin(ReadOnlyAdmin):
    fields = ["title", "description"]
    list_display = ["title", "description"]


@admin.register(CourseBought)
class CourseBoughtAdmin(ReadOnlyAdmin):
    ...


@admin.register(CompletedLevel)
class CompletedLevelAdmin(ReadOnlyAdmin):
    ...
