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
    return flask.jsonify([e for e in experiences.find({}, {'_id': False})])

@api.route("/aiml")
def aiml():
    print([e for e in experiences.find({"tag" : { "$in" : ["AIML"] }}, {'_id': False})], flush = True)
    return flask.jsonify([e for e in experiences.find({"tag" : { "$in" : ["AIML"] }}, {'_id': False})])

@api.route("/iot")
def iot():
    return flask.jsonify([e for e in experiences.find({"tag" : { "$in" : ["IoT"] }}, {'_id': False})])

@api.route("/azure")
def azure():
    return flask.jsonify([e for e in experiences.find({"tag" : { "$in" : ["Azure"] }}, {'_id': False})])

@api.route("/quant")
def quant():
    return flask.jsonify([e for e in experiences.find({"tag" : { "$in" : ["Quant"] }}, {'_id': False})])

if __name__ == "__main__":
    api.run(host="0.0.0.0", port=5000, debug=True)