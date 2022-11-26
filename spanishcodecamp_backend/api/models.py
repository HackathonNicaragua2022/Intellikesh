import os

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models import Sum
from django.utils.translation import gettext_lazy as _

from api.consts import LEVELS
from api.utils import get_courses_path

# Create your models here.


def get_level_path(instance, filename):
    return os.path.join(
        get_courses_path(),
        instance.course.path_name,
        LEVELS,
        instance.position,
        filename,
    )


class Course(models.Model):
    path_name = models.CharField(max_length=254, unique=True)
    description = models.TextField(_("Descripción"), max_length=1000, null=True)
    title = models.CharField(_("Título"), max_length=254)

    class LanguageTypes(models.TextChoices):
        PYTHON = "PY", "Python"
        JAVASCRIPT = "JS", "JavaScript"

    language = models.CharField(
        _("Lenguaje de programación"), max_length=3, choices=LanguageTypes.choices
    )

    class CoursePrice(models.IntegerChoices):
        FREE = 0, "Gratuito"
        PAID = 1, "De pago"

    course_price = models.PositiveSmallIntegerField(
        "precio del curso", choices=CoursePrice.choices
    )

    @property
    def course_duration(self) -> int:
        return self.levels.all().aggregate(Sum("estimated_duration"))[
            "estimated_duration__sum"
        ]

    @property
    def readable_name(self):
        return " ".join(self.name.split("_")).title()

    class Meta:
        verbose_name = _("curso")

    def __str__(self) -> str:
        return self.title


class User(AbstractUser):
    class Membership(models.IntegerChoices):
        FREE = 0, "Gratuita"
        PRO = 1, "Pro"

    membership_status = models.PositiveSmallIntegerField(
        _("Membresía"), choices=Membership.choices, default=Membership.FREE
    )


class CourseBought(models.Model):
    user = models.ForeignKey(User, verbose_name=_("usuario"), on_delete=models.CASCADE)
    course = models.ForeignKey(
        Course, verbose_name=_("curso"), on_delete=models.PROTECT
    )

    class Meta:
        verbose_name = _("curso comprado")
        verbose_name_plural = _("cursos comprados")


class Level(models.Model):
    title = models.CharField(_("Titulo"), max_length=254)

    course = models.ForeignKey(
        Course,
        verbose_name=_("Curso asociado"),
        on_delete=models.CASCADE,
        related_name="levels",
    )

    position = models.PositiveSmallIntegerField(_("Posición"))

    instructions = models.TextField(_("Instrucciones"))

    tests = models.TextField(_("Pruebas del curso"))

    estimated_duration = models.PositiveSmallIntegerField(
        _("Duracion estimada (en minutos)")
    )

    class Meta:
        verbose_name = _("nivel")
        verbose_name_plural = _("niveles")
        unique_together = ("course", "position")

    def change_position(self, position: int, instance=None):
        """
        Changes the position to one selected, if it's occupied,
        updates the position of the next instance, runs recursively
        """

        if not instance:
            instance = self

        instance.position = position

        try:
            next_instance = Level.objects.get(course=self.course, position=position)
            self.change_position(position + 1, next_instance)
        except Level.DoesNotExist:
            pass

        instance.save()


class CompletedLevel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name=_("usuario"))
    level = models.ForeignKey(Level, on_delete=models.CASCADE, verbose_name=_("nivel"))
    solution = models.TextField(max_length=2500, verbose_name=_("solución"))

    class Meta:
        unique_together = ["user", "level"]
        verbose_name = _("nivel completado")
        verbose_name_plural = _("niveles completados")
