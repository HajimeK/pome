import logging
import azure.functions as func
import os
from datetime import datetime
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from sendgrid.helpers.mail import Email
from sendgrid.helpers.mail import Content

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

def send_email(email, subject, body):
    logging.info(f"Sending email: {subject}")
    logging.info(f"Send from: {email}")

    adminMail = os.environ.get('MAIL_ADDRESS')
    sendgrid_api_key = os.environ.get('SENDGRID_SECRET__KEY')

    logging.info(f"message: {body}")

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
    logging.info(response.status_code)
    logging.info(response.body)
    logging.info(response.headers)