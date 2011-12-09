(function() {
  var AgileZenClient, exports, https, querystring;

  https = require('https');

  querystring = require('querystring');

  AgileZenClient = (function() {
    var prepareOptions, sendRequest;

    AgileZenClient.prototype.host = 'agilezen.com';

    AgileZenClient.prototype.baseUrl = '/api/v1/';

    function AgileZenClient(apikey) {
      this.apikey = apikey;
    }

    AgileZenClient.prototype.showStory = function(board, story, callback) {
      var options;
      options = prepareOptions({
        method: 'GET',
        path: "" + this.baseUrl + "/projects/" + board + "/stories/" + story
      });
      return sendRequest(options, callback);
    };

    AgileZenClient.prototype.commentOnStory = function(board, story, comment, callback) {
      var options;
      options = prepareOptions({
        method: 'POST',
        path: "" + this.baseUrl + "/projects/" + board + "/stories/" + story + "/comments",
        data: {
          text: comment
        }
      });
      return sendRequest(options, callback);
    };

    prepareOptions = function(options) {
      options.host = this.host;
      options.headers = options.headers || {};
      options.headers['X-Zen-ApiKey'] = this.apikey;
      return options;
    };

    sendRequest = function(options, callback) {
      var req;
      req = https.request(options);
      if (options.data) req.write(options.data);
      req.on('response', function(res) {
        var buffer;
        buffer = '';
        res.on('data', function(chunk) {
          return buffer += chunk;
        });
        return res.on('end', function() {
          var value;
          if (callback != null) {
            if (res.statusCode === 200) {
              value = JSON.parse(buffer);
              return callback(null, value);
            } else {
              return callback(buffer, null);
            }
          }
        });
      });
      return req.end();
    };

    return AgileZenClient;

  })();

  exports = module.exports = AgileZenClient;

}).call(this);
