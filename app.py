from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)

# Import models
from models import Driver, Bus, Student

@app.route('/api/drivers', methods=['GET'])
def get_drivers():
    drivers = Driver.query.all()
    return jsonify([driver.to_dict() for driver in drivers])

@app.route('/api/drivers', methods=['POST'])
def add_driver():
    data = request.json
    driver = Driver(name=data['name'], license_number=data['license_number'])
    db.session.add(driver)
    db.session.commit()
    return jsonify(driver.to_dict()), 201

if __name__ == '__main__':
    app.run(debug=True)
class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///app.db'  # Use SQLite for local development
    SQLALCHEMY_TRACK_MODIFICATIONS = False
