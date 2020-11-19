"""Import and run app."""
from praetorian import create_app
from praetorian.models import User

app = create_app(User)

if __name__ == "__main__":
    app.run()
