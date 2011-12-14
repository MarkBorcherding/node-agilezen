assert = require 'assert'

API_KEY = process.env.AGILEZEN_APIKEY
assert.ok API_KEY, 'API key is required'


AgileZen = require '../../src/agilezen'

module.exports = new  AgileZen API_KEY
