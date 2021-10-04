# Hybrid Django-React Base Project

This Django project has been tweaked to support react views on demand. 

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install requirements.txt.



```bash
pip install -r requirements.txt
```

Then proceed to install .js dependencies 

```bash
npm install
```

Create a .env file using the example provided

Run migrations


## Usage

This project uses Webpack and Babel as a javascript pipeline. 

To bundle javascript files run:


```python
npm run dev
```

## Utilities

The project comes with Graph-QL (django-graphene) and REST API's (django-REST-Framework) already installed and configured. Along with Django-Allauth for authentication.