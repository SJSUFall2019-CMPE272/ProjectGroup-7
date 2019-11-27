''' controller and routes for users '''
import os
from flask import request, jsonify
from app import app, mongo
import logger

ROOT_PATH = os.environ.get('ROOT_PATH')
LOG = logger.get_root_logger(
    __name__, filename=os.path.join(ROOT_PATH, 'output.log'))

@app.route('/candidates', methods=['GET'])
def get_all_candidates():
  candidates = mongo.db.candidates
  output = []
  for c in candidates.find():
   output.append({'name' : c['name']})
  return jsonify(output)
