from multiprocessing import connection
import sqlite3
from struct import pack
from flask import Flask, render_template, request, url_for, redirect
import sys
from flask_sqlalchemy import SQLAlchemy
import os
from models import db, package

'''
    vol_pack = [48, 30, 42, 36, 36, 48, 42, 42, 36, 24, 30, 30, 42, 36, 36]
    dist_pack = [10, 30, 25, 50, 35, 30, 15, 40, 30, 35, 45, 10, 20, 30, 25]
    cap_truck = [100,  200, 100, 300, 100]
'''
def create_db_table():
    # l, b, h, dest, tc
    package_obj1 = package(4, 3, 4, 10, 100)
    package_obj2 = package(3, 5, 2, 30, 200)
    package_obj3 = package(7, 2, 3, 25, 100)
    package_obj4 = package(3, 3, 4, 50, 300)
    package_obj5 = package(3, 4, 3, 35, 100)
    package_obj6 = package(4, 4, 3, 30, 0)
    package_obj7 = package(3, 2, 7, 15, 0)
    package_obj8 = package(3, 7, 2, 40, 0)
    package_obj9 = package(2, 9, 2, 30, 0)
    package_obj10 = package(2, 6, 2, 35, 0)
    package_obj11 = package(3, 2, 5, 45, 0)
    package_obj12 = package(5, 3, 2, 10, 0)
    package_obj13 = package(2, 3, 7, 20, 0)
    package_obj14 = package(9, 2, 2, 30, 0)
    package_obj15 = package(2, 2, 9, 25, 0)

    db.session.add(package_obj1)
    db.session.add(package_obj2)
    db.session.add(package_obj3)
    db.session.add(package_obj4) 
    db.session.add(package_obj5) 
    db.session.add(package_obj6) 
    db.session.add(package_obj7) 
    db.session.add(package_obj8) 
    db.session.add(package_obj9) 
    db.session.add(package_obj10) 
    db.session.add(package_obj11) 
    db.session.add(package_obj12) 
    db.session.add(package_obj13)
    db.session.add(package_obj14) 
    db.session.add(package_obj15)  

    db.session.commit()

    db.session.close()