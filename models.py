from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Driver(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    license_number = db.Column(db.String(50))

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'license_number': self.license_number
        }

class Bus(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    bus_number = db.Column(db.String(50))
    driver_id = db.Column(db.Integer, db.ForeignKey('driver.id'))
    driver = db.relationship('Driver', backref='buses')

class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    age = db.Column(db.Integer)
