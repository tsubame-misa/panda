import os
from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import json
import module

app = Flask(__name__)
cors = CORS(app)


@app.route("/user_message",  methods=['PUT'])
def user_message():
    text = json.loads(request.data.decode())
    res = module.make_response(text)
    return jsonify(res)


@app.route("/change_panda",  methods=['PUT'])
def change_pand():
    text = json.loads(request.data.decode())
    res = module.make_panda(text)
    return jsonify(res)


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0',
            port=int(os.environ.get('PORT', 8080)))
