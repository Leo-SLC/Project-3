import csv
import sqlite3
import os

print (os.getcwd())

# connects to the sqlite database file imdb_top.db
def connect_to_db():
    conn = sqlite3.connect('backend/imdb_top.db')
    return conn

# getting all the column names from imdb top 1000 to be used when writing to output.csv
def get_column_names():
    column_names = []
    try:
        conn = connect_to_db()
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        column_names = cursor.execute("SELECT name FROM sys.columns WHERE object_id = OBJECT_ID(/'imdbTop1000/')")

    except:
        column_names = []

    return column_names

# getting all data from imdb top 1000 table and wrting it to output.csv file
def get_all_data():
    try: 
        conn = connect_to_db()
        cursor = conn.cursor()
        data = cursor.execute('SELECT * FROM imdbTop1000')
        
        with open('backend/output.csv', 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(get_column_names())
            writer.writerows(data)

    except:
        f = open('file.txt', 'r+')
        f.truncate(0) # need '0' when using r+

<<<<<<< Updated upstream
        print('output.csv')
    return open('output.csv', 'r')

get_all_data()
=======
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
    app.run(port=5000, debug=True)
>>>>>>> Stashed changes
