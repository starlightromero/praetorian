"""Custom exceptions."""


class EmailLoginError(Exception):
    """Exception raised for incorrect email during login.

    Attributes
    ----------
        email -- input email which caused the error
        message -- explanation of the error

    """

    def __init__(
        self, email, message="Email is not associated with an account"
    ):
        """Initialize class with email and message."""
        self.email = email
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        """Return email and message."""
        return f"{self.email} -> {self.message}"


class PraetorianError(Exception):
    """Exception raised for a non-existant Praetorian.

    Attributes
    __________
        identifier -- input which was used to get the Praetorian
        message -- explanation of the error

    """

    def __init__(
        self,
        identifier,
        message="Praetorian with given identifier does not exist",
    ):
        """Initialize class with identifier and message."""
        self.identifier = identifier
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        """Return identifier and message."""
        return f"{self.identifier} -> {self.message}"
