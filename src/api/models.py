from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Restaurant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    menus = db.relationship('Menu', backref='restaurant', lazy=True)

    def __repr__(self):
        return f'<Restaurant {self.name}>'
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }

class Table(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurant.id'), nullable=False)
    number = db.Column(db.String(50), nullable=False)

    restaurant = db.relationship('Restaurant', backref=db.backref('tables', lazy=True))

    def serialize(self):
        return {
            "id": self.id,
            "restaurant_id": self.restaurant_id,
            "number": self.number
        }        
class Menu(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    price = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(50), nullable=False)
    image = db.Column(db.String(255), nullable=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurant.id'), nullable=False)

    def __repr__(self):
        return f'<Menu {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "category": self.category,
            "image": self.image,
            "restaurant_id": self.restaurant_id
        }
    
