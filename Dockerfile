FROM python:2-alpine
RUN apk add python-pip
RUN pip install flask
COPY *.py /site
COPY data /site
COPY modules /site
COPY static /site
COPY templates /site
ENV FLASK_APP='main'
EXPOSE 5000
ENTRYPOINT ["python", "-m", "flask", "run"]