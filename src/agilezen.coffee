https       = require 'https'
querystring = require 'querystring'


class AgileZenClient
  
  host: 'agilezen.com'
  baseUrl: '/api/v1/'

  constructor:(@apikey) ->

  showStory: (board,story,callback) ->
    options = prepareOptions
      method : 'GET'
      path   : "#{@baseUrl}/projects/#{board}/stories/#{story}"
    sendRequest options, callback

  commentOnStory: (board,story, comment, callback) ->
    options = prepareOptions
      method: 'POST'
      path: "#{@baseUrl}/projects/#{board}/stories/#{story}/comments"
      data:
        text: comment

    sendRequest options, callback


  prepareOptions =  (options) ->
    options.host = @host
    options.headers = options.headers || {}
    options.headers['X-Zen-ApiKey'] = @apikey
    return options

  sendRequest =  (options, callback) ->
    req = https.request options

    req.write options.data if options.data

    req.on 'response', (res) ->
      buffer = ''

      res.on 'data', (chunk) ->
        buffer += chunk

      res.on 'end', ->
        if callback?
          if res.statusCode is 200
            value = JSON.parse buffer
            callback null, value
          else
            callback buffer, null
    req.end()

exports = module.exports = AgileZenClient


