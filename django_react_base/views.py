from django.shortcuts import render
from django.views.generic import TemplateView

class MyReactView(TemplateView):
    template_name = 'react-app.html'

    def get_context_data(self, **kwargs):
        return {'context_variable': 'value'}