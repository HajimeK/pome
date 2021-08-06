import logging

import azure.functions as func
import pyodbc
import os

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    CONN_STRING = os.environ.get('POME_SQL_CONN_STR')
    connection = pyodbc.connect(CONN_STRING)
    cursor = connection.cursor()
    cursor.execute(slq)
    rows = cursor.fetchall()
    cursor.close()
    print(r) for r in rows

    # name = req.params.get('name')
    # if not name:
    #     try:
    #         req_body = req.get_json()
    #     except ValueError:
    #         pass
    #     else:
    #         name = req_body.get('name')

    if name:
        return func.HttpResponse(f"Hello, {name}. This HTTP triggered function executed successfully.")
    else:
        return func.HttpResponse(
            "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
            status_code=200
        )
