from django.shortcuts import render
# from django.views.generic import TemplateView

# class ReactView(TemplateView):
#     template_name = 'react-app.html'

#     def get_context_data(self, **kwargs):
#         return {'context_variable': 'value'}

def react_view(request, path='/app'):
    return render('react_app.html', context={'context_variable': 'value'})