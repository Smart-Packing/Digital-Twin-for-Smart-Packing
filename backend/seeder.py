from multiprocessing import connection
import sqlite3
from flask import Flask, render_template, request, url_for, redirect
import sys
from flask_sqlalchemy import SQLAlchemy
import os

def get_db_connection():
    conn = sqlite3.connect('database.db')
    return conn


def create_db_table():
    connection = get_db_connection()
    # connection.row_factory = lambda cur, row: row[0]

    with open('schema.sql') as f:
        connection.executescript(f.read())

    cur = connection.cursor()

    cur.execute("INSERT INTO package (depth, width, height, destination) VALUES (?, ?, ?, ?)",
                (4, 4, 4, 4)
                )
    cur.execute("INSERT INTO package (depth, width, height, destination) VALUES (?, ?, ?, ?)",
                (3, 3, 3, 3)
                )
    cur.execute("INSERT INTO package (depth, width, height, destination) VALUES (?, ?, ?, ?)",
                (2, 2, 2, 2)
                )

    volume = cur.execute("SELECT (depth * width * height) FROM package").fetchall()
    dimensions = cur.execute("SELECT depth, width, height FROM package").fetchall()
    distance = cur.execute("SELECT destination FROM package").fetchall()

    print('dimensions', dimensions[0])
    print('volume', volume[0][0])
    print('distance', distance[0][0])
 
    data = [volume[0], dimensions, distance[0]]
    connection.commit()
    connection.close()
    return data