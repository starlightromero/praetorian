"""Import libraries."""
from sqlalchemy.orm import backref
from praetorian import db


class Executive(db.Model):
    """Executive class extends User."""

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.Text)
    account_type = db.Column(db.String(20), nullable=False)
    praetorians = db.relationship("Praetorian", secondary="unit")

    def __repr__(self):
        """Return Executive."""
        return f"Executive(name: '{self.name}', email: '{self.email}')"

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
    def identify(cls, given_id):
        """Return User with the given id."""
        return cls.query.get(given_id)

    def add_praetorian(self, praetorian):
        """Add a Praetorian to the Executive."""
        if self.praetorians:
            self.praetorians.append(praetorian)
        else:
            self.praetorians = [praetorian]
        praetorian.add_executive(self)


class Praetorian(db.Model):
    """Praetorian class extends User."""

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.Text)
    account_type = db.Column(db.String(20), nullable=False)
    experience = db.Column(db.Integer)
    phone = db.Column(db.Integer)
    address = db.Column(db.String(40))
    city = db.Column(db.String(20))
    state = db.Column(db.String(2))
    travel = db.Column(db.Boolean)
    background = db.Column(db.Boolean)
    executives = db.relationship("Executive", secondary="unit")

    def __repr__(self):
        """Return Praetorian."""
        return f"Praetorian(name: '{self.name}', email: '{self.email}')"

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
    def identify(cls, given_id):
        """Return User with the given id."""
        return cls.query.get(given_id)

    def add_executive(self, executive):
        """Add an executive to the Praetorian"""
        if self.executives:
            self.executives.append(executive)
        else:
            self.executives = [executive]


class Unit(db.Model):
    """Executive Praetorian Link many-to-many database class."""

    id = db.Column(db.Integer, primary_key=True)
    executive_id = db.Column(db.Integer, db.ForeignKey("executive.id"))
    praetorian_id = db.Column(db.Integer, db.ForeignKey("praetorian.id"))
    executive = db.relationship(
        "Executive", backref=backref("unit", cascade="all, delete-orphan")
    )
    praetorian = db.relationship(
        "Praetorian", backref=backref("unit", cascade="all, delete-orphan")
    )
