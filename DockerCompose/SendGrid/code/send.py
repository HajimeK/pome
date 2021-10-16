from flask import Flask
import os
from datetime import datetime
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from sendgrid.helpers.mail import Email
from sendgrid.helpers.mail import Content

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


def send_email(email, subject, body):

    adminMail = os.environ.get('MAIL_ADDRESS')
    sendgrid_api_key = os.environ.get('SENDGRID_SECRET__KEY')

    message = Mail(
        from_email = adminMail,
        to_emails = adminMail,
        subject = subject,
        plain_text_content = email + '\n' +body)

    sg = SendGridAPIClient(sendgrid_api_key)

    #from_email = Email(email)
    #to_email = Email(adminMail)
    #content = Content("text/plain", body)
    response = sg.client.mail.send.post(request_body=message.get())

@api.route("/send")
def send():
    return flask.jsonify([e for e in experiences.find({"tags" : { "$in" : ["AIML"] }})])


if __name__ == "__main__":
    api.run(host="0.0.0.0", port=5000, debug=True)


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    req_body = req.get_json()
    email = req_body.get('email')
    category = req_body.get('category')
    message = req_body.get('message')

    send_email(email, category, message)

    return func.HttpResponse(
        "This HTTP triggered function executed successfully.",
        status_code=200
    )

