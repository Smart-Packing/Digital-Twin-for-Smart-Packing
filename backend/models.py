"""Data models."""
from app import db


class User(db.Model):
    """Data model for user accounts."""

    __tablename__ = 'package'
    id = db.Column(
        db.Integer,
        primary_key=True
    )
    length = db.Column(
        db.String(64),
        index=False,
        unique=True,
        nullable=False
    )
    width = db.Column(
        db.String(80),
        index=True,
        unique=True,
        nullable=False
    )
    width = db.Column(
        db.String(80),
        index=True,
        unique=True,
        nullable=False
    )
    destination = db.Column(
        db.String(80),
        index=True,
        unique=True,
        nullable=False
    )

    def __repr__(self):
        return '<User {}>'.format(self.username)