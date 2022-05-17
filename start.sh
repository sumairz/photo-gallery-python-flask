#!/bin/sh

#cd /site
export FLASK_APP=main
python3 -m flask run --host 0.0.0.0
