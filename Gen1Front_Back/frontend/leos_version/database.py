import csv
import sqlite3
import os
from flask import Flask, request, jsonify, render_template


# Check the current working directory
print(os.getcwd())

# Connects to the SQLite database file imdb_top.db
def connect_to_db():
    conn = sqlite3.connect('imdb_top.db')
    return conn

# Getting all the column names from imdb top 1000 to be used when writing to output.csv
def get_column_names():
    column_names = []
    try:
        conn = connect_to_db()
        cursor = conn.cursor()
        cursor.execute("PRAGMA table_info(imdbTop1000)")
        columns = cursor.fetchall()
        column_names = [column[1] for column in columns]

    except Exception as e:
        print("Error getting column names:", str(e))

    return column_names

# Getting all data from imdb top 1000 table and returning it as JSON
def get_all_data():
    try:
        conn = connect_to_db()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM imdbTop1000')
        column_names = get_column_names()
        data = cursor.fetchall()
        json_data = []
        for row in data:
            row_dict = {}
            for i in range(len(column_names)):
                row_dict[column_names[i]] = row[i]
            json_data.append(row_dict)

        return json_data
    
    except Exception as e:
        print("Error getting data:", str(e))
        return []
    
app = Flask(__name__)
@app.route('/', methods=['GET'])
def api_get_all_imdb():
    try:
        json_data = get_all_data()
        return jsonify(json_data)
    except Exception as e:
        print("Error in API:", str(e))
        return jsonify({'error': 'An error occurred'}), 500
if __name__ == "__main__":
    app.run(debug=True)

@app.route("/")
def index():
    return render_template("index.html")
