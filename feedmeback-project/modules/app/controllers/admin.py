''' controller and routes for admin '''
import os
from flask import request, jsonify
from app import app, mongo
import logger

ROOT_PATH = os.environ.get('ROOT_PATH')
LOG = logger.get_root_logger(
    __name__, filename=os.path.join(ROOT_PATH, 'output.log'))

@app.route('/login', methods=['POST'])
def insert_candidate():
    data = request.get_json()
    mongo.db.candidates.insert_one(data)
    return jsonify({'ok': True, 'message': 'User created successfully!'}), 200
