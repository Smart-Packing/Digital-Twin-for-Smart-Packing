from multiprocessing import connection
import sqlite3
from flask import Flask, render_template, request, url_for, redirect
import sys
from flask_sqlalchemy import SQLAlchemy
import os
from sqlalchemy.sql import func

basedir = os.path.abspath(os.path.dirname(__file__))
db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] =\
        'sqlite:///' + os.path.join(basedir, 'database.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize extensions
    # To use the application instances above, instantiate with an application:
    db.init_app(app)

    with app.app_context():
        import routes  # Import routes
        db.create_all()  # Create sql tables for our data models

    return app