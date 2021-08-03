import pyodbc
import os

CONN_STRING = os.environ.get('POME_SQL_CONN_STR')
print(CONN_STRING)
connection = pyodbc.connect(CONN_STRING)
cursor = connection.cursor()
cursor.execute(slq)
rows = cursor.fetchall()
cursor.close()
print(r for r in rows)