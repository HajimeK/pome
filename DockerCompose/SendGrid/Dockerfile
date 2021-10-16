FROM python:3.9-slim

WORKDIR /code
COPY ./code/* /code/
ENV FLASK_APP=experiences.py
ENV FLASK_RUN_HOST=0.0.0.0
EXPOSE 5000

RUN pip install -r requirements.txt
CMD ["flask", "run"]