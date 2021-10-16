from flask import Flask
from pymongo import MongoClient
import time
import flask

while True:
    try :
        client = MongoClient("mongodb://root:mongo@mongo:27017")
        db = client.db
        experiences = db.experiences
        break
    except:
        time.sleep(10)
        continue

api = Flask(__name__)

@api.route("/")
def index():
    return flask.jsonify([e for e in experiences.find()])

@api.route("/aiml")
def aiml():
    return flask.jsonify([e for e in experiences.find({"tags" : { "$in" : ["AIML"] }})])

@api.route("/iot")
def iot():
    return flask.jsonify([e for e in experiences.find({"tags" : { "$in" : ["IoT"] }})])

@api.route("/azure")
def azure():
    return flask.jsonify([e for e in experiences.find({"tags" : { "$in" : ["Azure"] }})])

@api.route("/quant")
def quant():
    return flask.jsonify([e for e in experiences.find({"tags" : { "$in" : ["Quant"] }})])

if __name__ == "__main__":
    api.run(host="0.0.0.0", port=5000, debug=True)