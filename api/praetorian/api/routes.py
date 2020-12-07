"""Import libraries."""
from flask import Blueprint, request, jsonify
from flask_praetorian import auth_required
from praetorian import db, guard_executive, guard_praetorian
from praetorian.models import Praetorian, Executive
from praetorian.api.exceptions import EmailLoginError

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
    hashed_password = guard_praetorian.hash_password(password)
    praetorian = Praetorian(
        name=name,
        email=email,
        password=hashed_password,
        account_type=account_type,
    )
    db.session.add(praetorian)
    db.session.commit()
    return (
        jsonify(
            {
                "id": praetorian.id,
                "message": f"{praetorian.name} has been created",
            }
        ),
        201,
    )


@api.route("/praetorian", methods=["PATCH"])
def update_praetorian():
    """Update a Praetorian in database."""
    praetorian_id = request.json.get("id")
    praetorian = Praetorian.query.get(praetorian_id)
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
        200,
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
    hashed_password = guard_executive.hash_password(password)
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
        raise EmailLoginError(email)
    password = request.json.get("password")
    executive = guard_executive.authenticate(email, password)
    token = guard_executive.encode_jwt_token(executive)
    return jsonify({"token": token, "username": executive.name}), 200


@api.route("/executive/add", methods=["POST"])
def add_praetorian():
    """Add Praetorian to Executive."""
    email = request.json.get("email")
    executive = Executive.query.filter_by(email=email).first()
    if not executive:
        raise Exception
    praetorian_id = request.json.get("praetorian_id")
    praetorian = Praetorian.query.get(praetorian_id)
    if not praetorian:
        raise Exception
    executive.add_praetorian(praetorian)
    return jsonify(
        {
            "message": f"{praetorian.name} has been assigned to guard {executive.name}."
        }
    )


@api.route("/executive/praetorians", methods=["POST"])
def get_selected_praetorians():
    """Get all Praetorians for a given Executive."""
    email = request.json.get("email")
    executive = Executive.query.filter_by(email=email).first()
    if not executive:
        raise Exception
