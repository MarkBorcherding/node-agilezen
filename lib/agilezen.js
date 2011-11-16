(function() {
  var AgileZenClient, exports, https, querystring;
  https = require('https');
  querystring = require('querystring');
  AgileZenClient = (function() {
    AgileZenClient.prototype.host = 'agilezen.com';
    AgileZenClient.prototype.baseUrl = '/api/v1/';
    function AgileZenClient(apikey) {
      this.apikey = apikey;
    }
    AgileZenClient.prototype.showStory = function(board, story, callback) {
      var options;
      options = this._prepareOptions({
        method: 'GET',
        path: "" + this.baseUrl + "/projects/" + board + "/stories/" + story
      });
      return this._sendRequest(options, callback);
    };
    AgileZenClient.prototype._prepareOptions = function(options) {
      options.host = this.host;
      options.headers = options.headers || {};
      options.headers['X-Zen-ApiKey'] = this.apikey;
      return options;
    };
    AgileZenClient.prototype._sendRequest = function(options, callback) {
      var req;
      req = https.request(options);
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
              return callback(value, null);
            } else {
              return callback(null, buffer);
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
