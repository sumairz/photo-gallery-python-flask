#!/bin/sh

cd /site
export FLASK_APP='main'
python -m flask run
