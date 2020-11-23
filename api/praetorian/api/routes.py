"""Import libraries."""
from flask import Blueprint, request, jsonify
from flask_praetorian import auth_required
from praetorian import db, guard
from praetorian.models import User

api = Blueprint("api", __name__)


@api.route("/user", methods=["POST"])
def create_user():
    """Create User in database."""
    email = request.json.get("email")
    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"error": "User already exists"})
    name = request.json.get("name")
    password = request.json.get("password")
    account_type = request.json.get("account")
    hashed_password = guard.hash_password(password)
    user = User(
        name=name,
        email=email,
        password=hashed_password,
        account_type=account_type,
    )
    db.session.add(user)
    db.session.commit()
    return (
        jsonify({"message": f"{user.name} has been created"}),
        201,
    )
