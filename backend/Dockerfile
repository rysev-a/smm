FROM python:3
ENV PYTHONUNBUFFERED 1
COPY . .
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["gunicorn", "app:create_app('app.settings.production')"]
