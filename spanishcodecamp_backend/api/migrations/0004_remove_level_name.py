# Generated by Django 4.1.2 on 2022-10-23 06:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_alter_completedlevel_options_alter_course_options_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="level",
            name="name",
        ),
    ]