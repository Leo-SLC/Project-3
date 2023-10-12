import numpy as np
import os

import sqlite3
import json

from flask import Flask, jsonify, render_template


#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################
def get_sql_conn():
    conn = sqlite3.connect('test.db')
    conn.row_factory = sqlite3.Row
    return conn

def row_to_dict(row):
    return dict(row)

@app.route("/")
def index():
    return render_template("/index.html")

@app.route("/movies")
def names():
    conn = get_sql_conn()
    results = conn.execute('SELECT * FROM imdbTop1000').fetchall()
    results_dict = [row_to_dict(row) for row in results]
    conn.close()
    return json.dumps(results_dict)



if __name__ == '__main__':
    app.run(port=9000,debug=True)