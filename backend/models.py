"""Data models."""
from app import db

class package(db.Model):
    """Data model for packages."""

    __tablename__ = 'package'
    id = db.Column(
        db.Integer,
        primary_key=True
    )
    depth = db.Column(
        db.Integer,
        index=False,
       # unique=True,
        nullable=False
    )
    width = db.Column(
        db.Integer,
        index=False,
       # unique=True,
        nullable=False
    )
    height = db.Column(
        db.Integer,
        index=False,
        # unique=True,
        nullable=False
    )
    destination = db.Column(
        db.Integer,
        index=False,
        # unique=True,
        nullable=False
    )
    truck_capacity = db.Column(
        db.Integer,
        index=False,
        # unique=True,
        nullable=False
    )

    def __init__(self, depth, width, height, destination, truck_capacity):
        self.depth = depth
        self.width = width
        self.height = height
        self.destination = destination
        self.truck_capacity = truck_capacity