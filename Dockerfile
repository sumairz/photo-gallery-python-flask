FROM python:2-alpine
RUN apk add --update py-pip
RUN pip install flask
COPY *.py /site/ 
COPY data /site/data/
COPY modules /site/modules/
COPY static /site/static/
COPY templates /site/templates/
COPY start.sh /
RUN chmod +x /start.sh
#ENV FLASK_APP='main'
EXPOSE 5000
CMD ["/start.sh"]
#ENTRYPOINT ["python", "-m", "flask", "run"]