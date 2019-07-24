FROM python:3
ENV PYTHONUNBUFFERED 1
COPY . .
RUN pip install -r requirements.txt
EXPOSE 5000
CMD export FLASK_APP=cli.py; \
    export SETTINGS_ENV=app.settings.production; \
    flask db upgrade; \
    gunicorn 'app:create_app("app.settings.production")'
