"""Import libraries."""
from praetorian import db


class User(db.Model):
    """Account database class."""

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.Text)

    def __repr__(self):
        """Return User."""
        return f"Account(name: '{self.name}', email: '{self.email}')"

    @property
    def identity(self):
        """Return User id."""
        return self.id

    @property
    def rolenames(self):
        """Return an empty list."""
        return []

    @classmethod
    def lookup(cls, email):
        """Return User with a given email."""
        return cls.query.filter_by(email=email).one_or_none()

    @classmethod
    def identify(cls, id):
        """Return User with the given id."""
        return cls.query.get(id)
