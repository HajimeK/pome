from flask import Flask
from pymongo import MongoClient


client = MongoClient("mongo", 27017)
client['admin'].authenticate("root","mongo")
#db = client.experiences

middle = Flask(__name__)
@middle.route("/")
def index():
    return client.server_info()

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
    middle.run(host="0.0.0.0", port=5000, debug=True)