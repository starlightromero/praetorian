"""Import libraries."""
from flask import Blueprint, request, jsonify
from flask_praetorian import auth_required
from praetorian import db, guard
from praetorian.models import Praetorian, Executive

api = Blueprint("api", __name__)


@api.route("/praetorians", methods=["GET"])
def get_praetorians():
    """Return all Praetorians."""
    praetorians = Praetorian.query.filter_by(account_type="praetorian").all()
    praetorian_list = []
    for praetorian in praetorians:
        praetorian_list.append(praetorian.name)
    return jsonify({"praetorians": praetorian_list})


@api.route("/praetorian", methods=["POST"])
def create_praetorian():
    """Create a new Praetorian in database."""
    email = request.json.get("email")
    praetorian = Praetorian.query.filter_by(email=email).first()
    if praetorian:
        return jsonify({"error": "Praetorian already exists"})
    name = request.json.get("name")
    password = request.json.get("password")
    account_type = request.json.get("account")
    hashed_password = guard.hash_password(password)
    praetorian = Praetorian(
        name=name,
        email=email,
        password=hashed_password,
        account_type=account_type,
    )
    db.session.add(praetorian)
    db.session.commit()
    return (
        jsonify({"message": f"{praetorian.name} has been created"}),
        201,
    )


@api.route("/praetorian", methods=["PATCH"])
def update_praetorian():
    """Update a Praetorian in database."""
    email = request.json.get("email")
    praetorian = Praetorian.query.filter_by(email=email).first()
    if not praetorian:
        return jsonify({"error": "Praetorian does not exist"})
    praetorian.experience = request.json.get("experience")
    praetorian.phone = request.json.get("phone")
    praetorian.address = request.json.get("address")
    praetorian.city = request.json.get("city")
    praetorian.state = request.json.get("state")
    praetorian.travel = request.json.get("travel")
    praetorian.background = request.json.get("background")
    db.session.commit()
    return (
        jsonify({"message": f"{praetorian.name} has been updated"}),
        201,
    )


@api.route("/executive", methods=["POST"])
def create_executive():
    """Create a new Executive in database."""
    email = request.json.get("email")
    executive = Executive.query.filter_by(email=email).first()
    if executive:
        return jsonify({"error": "Executive already exists"})
    name = request.json.get("name")
    password = request.json.get("password")
    account_type = request.json.get("account")
    hashed_password = guard.hash_password(password)
    executive = Executive(
        name=name,
        email=email,
        password=hashed_password,
        account_type=account_type,
    )
    db.session.add(executive)
    db.session.commit()
    return (
        jsonify({"message": f"{executive.name} has been created"}),
        201,
    )


@api.route("/executive/login", methods=["POST"])
def login_user():
    """Login Executive and return token and username."""
    email = request.json.get("email")
    executive = Executive.query.filter_by(email=email).first()
    if not executive:
        return jsonify({"error": "Executive does not exists"})
    password = request.json.get("password")
    executive = guard.authenticate(email, password)
    token = guard.encode_jwt_token(executive)
    return jsonify({"token": token, "username": executive.name}), 200
