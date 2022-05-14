FROM python:2-alpine
RUN apk add --update py-pip
RUN pip install flask
COPY *.py /site/
COPY data /site/
COPY modules /site/
COPY static /site/
COPY templates /site/
COPY start.sh /
#ENV FLASK_APP='main'
EXPOSE 5000
CMD ["/start.sh"]
#ENTRYPOINT ["python", "-m", "flask", "run"]