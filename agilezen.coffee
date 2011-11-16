https       = require 'https'
querystring = require 'querystring'

class AgileZenClient
  
  host: 'agilezen.com'
  baseUrl: '/api/v1/'

  constructor:(@apikey) ->

  showStory: (board,story,callback) ->
    options = @_prepareOptions
      method:'GET'
      path:"#{baseUrl}/projects/#{board}/stories/#{story}"
    @_sendRequest options, callback


  _prepareOptions: (options) ->
    options.host = @host
    options.headers = options.headers || {}
    options.headers['X-Zen-ApiKey'] = @apikey

  _sendRequest: (options, callback) ->
    req = https.request(options)

    req.on 'response', (res) ->
      buffer = ''

      res.on 'data', (chunk) ->
        buffer += chunk

      res.on 'end', ->
        if callback?
          if res.statusCode is 200
            value = JSON.parse(buffer)
            callback value, null
          else
            callback null, buffer
    req.end()

exports = module.exports = AgileZenClient


