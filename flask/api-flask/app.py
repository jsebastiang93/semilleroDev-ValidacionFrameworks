from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/api-flask/colombia', methods=['GET'])
def get_colombia_info():
    try:
        response = requests.get('https://restcountries.com/v3.1/alpha/col')
        response.raise_for_status()
        return jsonify(response.json())
    except requests.RequestException:
        return jsonify({'error': 'Error consultando la API externa'}), 500

@app.route('/api-flask/', methods=['GET'])
def index():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)