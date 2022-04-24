from multiprocessing import connection
import sqlite3
from struct import pack
from flask import Flask, render_template, request, url_for, redirect
import sys
from flask_sqlalchemy import SQLAlchemy
import os
from models import db, package


def create_db_table():
    # l, b, h, dest, tc
    package_obj1 = package(4, 4, 4, 5, 100)
    package_obj2 = package(3, 3, 3, 6, 200)
    package_obj3 = package(2, 2, 2, 7, 300)

    db.session.add(package_obj1)
    db.session.add(package_obj2)
    db.session.add(package_obj3)

    db.session.commit()

    db.session.close()