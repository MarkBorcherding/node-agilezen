# node-AgileZen

A NodeJS client for AgileZen. This is my first venture into both NodeJS and Coffeescript so I apologize if the code looks ugly. 

I am following [node-hipchat](http://search.npmjs.org/#/node-hipchat) as a pattern.

# Example

```coffeescript
[board,story] = [123,456]

AgileZen = require 'node-agilezen'
agilezen = new AgileZen 'your api key'
agilezen.showStory board, story, (data,err) ->
  if data
    console.log data.text
  else
    console.log 'could not find card'
```
