from flask import Flask
from pymongo import MongoClient
import time

while True:
    try :
        client = MongoClient("mongodb://root:mongo@mongo:27017")
        break
    except:
        time.sleep(10)
        continue

api = Flask(__name__)

@api.route("/")
def index():
    return "hello"

@middle.route("/aiml")
def aiml():
    return client.server_info()

@middle.route("/iot")
def iot():
    return client.server_info()

@middle.route("/azure")
def azure():
    return client.server_info()

@middle.route("/quant")
def quant():
    return client.server_info()

if __name__ == "__main__":
    api.run(host="0.0.0.0", port=5000, debug=True)