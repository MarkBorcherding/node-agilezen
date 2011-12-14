assert = require 'assert'

BOARD_ID = process.env.AGILEZEN_BOARD
assert.ok BOARD_ID, 'A AgileZen board is required'

az = require './helpers/common'

az.showStory BOARD_ID, 1, (err, data) ->
  assert.ifError err
  assert.ok data
