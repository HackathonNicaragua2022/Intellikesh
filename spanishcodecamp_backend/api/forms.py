from django import forms
from django_ace import AceWidget

from api.models import Course, Level


class LevelForm(forms.ModelForm):
    instructions = forms.CharField(widget=AceWidget(mode="markdown"))
    tests = forms.CharField(widget=AceWidget(mode="javascript"))

    class Meta:
        model = Level
        fields = "__all__"


class CourseForm(forms.ModelForm):
    description = forms.CharField(widget=AceWidget(mode="markdown"))

    class Meta:
        model = Course
        fields = "__all__"
