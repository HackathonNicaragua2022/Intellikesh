# Generated by Django 4.1.3 on 2022-11-25 23:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0006_alter_level_instructions_alter_level_tests"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="course",
            name="path_name",
        ),
    ]