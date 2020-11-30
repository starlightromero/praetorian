"""Import and run app."""
from praetorian import create_app
from praetorian.models import Praetorian, Executive

app = create_app(Praetorian, Executive)

if __name__ == "__main__":
    app.run()
