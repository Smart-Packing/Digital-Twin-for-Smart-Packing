from flask import request, render_template, make_response
from datetime import datetime as dt
from flask import current_app as app
from models import db, User


if __name__ == '__main__':
    app.run(debug=True)