"""Import libraries."""
from praetorian import db


class User(db.Model):
    """Account database class."""

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.Text)
    account_type = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        """Return User."""
        if self.account_type == "praetorian":
            return f"Praetorian(name: '{self.name}', email: '{self.email}')"
        if self.account_type == "executive":
            return f"Executive(name: '{self.name}', email: '{self.email}')"
        return f"User(name: '{self.name}', email: '{self.email}')"

    @property
    def identity(self):
        """Return User id."""
        return self.id

    @property
    def rolenames(self):
        """Return a list of User's account type."""
        return [self.account_type]

    @classmethod
    def lookup(cls, email):
        """Return User with a given email."""
        return cls.query.filter_by(email=email).one_or_none()

    @classmethod
    def identify(cls, id):
        """Return User with the given id."""
        return cls.query.get(id)
