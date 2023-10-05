from flask import Flask, request, jsonify 


app = Flask(__name__)

@app.route('/api/imdb', methods=['GET'])
def api_get_all_imdb():
   # return jsonify(get_all_data()) # This is expecting json and returns json
   return get_all_data() # returns csv file, trying to avoid parcing json to csv because my front end expects csv

if __name__ == "__main__":
    #app.debug = True
    #app.run(debug=True)
    app.run() #run app


