FROM python:3-alpine
RUN apk add --update py3-pip
COPY . /site/
RUN pip install -r /site/requirements.txt
RUN chmod +x /site/start.sh
EXPOSE 5000
CMD ["/site/start.sh"]
