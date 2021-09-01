from flask import Flask
from pymongo import MongoClient

middle = Flask(__name__)
@middle.route("/")
def index():
    return "<h1>Hello, Flask!</h1>"

@middle.route("/aiml")
def aiml():
    return .

@middle.route("/iot")
def iot():
    return 

@middle.route("/azure")
def azure():
    return

@middle.route("/quant"):
def quant():
    return 

if __name__ == "__main__":
    middle.run(host="0.0.0.0", port=80, debug=True)