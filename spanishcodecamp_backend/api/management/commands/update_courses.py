import json
import os

from api.consts import LEVELS
from api.models import Course, Level
from api.utils import get_courses_path
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Generates the courses and levels in the database"
    COURSES_PATH = get_courses_path()
    COURSE_LANGUAGES = {value: key for key, value in Course.LanguageTypes.choices}
    COURSE_PRICES = {
        "free": Course.CoursePrice.FREE,
        "paid": Course.CoursePrice.PAID,
    }

    def handle(self, *args, **options):

        courses = [
            (f.path, f.name) for f in os.scandir(self.COURSES_PATH) if f.is_dir()
        ]

        for course_path, course_name in courses:
            with open(os.path.join(course_path, "meta.json")) as file:
                course_metadata: dict = json.load(file)

            with open(os.path.join(course_path, "description.md")) as file:
                description_markdown = file.read()

            course_instance, created = Course.objects.update_or_create(
                title=course_metadata.get("title"),
                language=self.COURSE_LANGUAGES[course_metadata.get("language")],
                description=description_markdown,
                course_price=self.COURSE_PRICES[course_metadata.get("price")],
                defaults={"path_name": course_path},
            )

            if created:
                self.stdout.write(
                    self.style.SUCCESS(
                        "\nSe ha creado el curso %s correctamente" % course_name
                    )
                )
            else:
                self.stdout.write(
                    self.style.SUCCESS(
                        "\nCurso %s - (se ha actualizado si hubo cambios en el archivo meta o la descripción)"
                        % course_name
                    )
                )

            total_levels = [
                (f.path, f.name)
                for f in os.scandir(os.path.join(course_path, LEVELS))
                if f.is_dir()
            ]

            for level_path, level_position in total_levels:
                try:
                    level_position = int(level_position)
                except ValueError:
                    self.stdout.write(
                        self.style.ERROR(
                            "Saltando nivel - %s - el nombre de la carpeta debe ser un numero"
                            % level_path
                        )
                    )
                    continue

                with open(os.path.join(level_path, "meta.json")) as file:
                    level_metadata: dict = json.load(file)

                _, created = Level.objects.update_or_create(
                    defaults={"position": level_position, "course": course_instance},
                    title=level_metadata["title"],
                    estimated_duration=level_metadata["estimated_duration"],
                )

                if created:
                    self.stdout.write(
                        self.style.SUCCESS(
                            "Se ha creado el nivel '%s'" % level_metadata["title"]
                        )
                    )
                else:
                    self.stdout.write(
                        self.style.HTTP_INFO(
                            "Se ha actualizado el nivel '%s'" % level_metadata["title"]
                        )
                    )

        self.stdout.write(
            self.style.SUCCESS("\n\n SE HAN ACTUALIZADO LOS CURSOS CON EXITO")
        )
