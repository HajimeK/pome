FROM python:alpine
RUN MKDIR /code
COPY ./code /code
WORKDIR /code
RUN pip install -r requirements.txt
CMD ["python", "middle.py"]