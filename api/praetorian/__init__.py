"""Import libraries."""
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_praetorian import Praetorian
from praetorian.config import Config

cors = CORS()
db = SQLAlchemy()
guard = Praetorian()


def create_app(model, config_class=Config):
    """Create an instance of the praetorian app."""
    app = Flask(__name__)
    app.config.from_object(config_class)

    cors.init_app(app, cors_allowed_origins="*")
    db.init_app(app)
    guard.init_app(app, model)

    from praetorian.api.routes import api

    app.register_blueprint(api, url_prefix="/api")

    with app.app_context():
        db.create_all()

    return app
