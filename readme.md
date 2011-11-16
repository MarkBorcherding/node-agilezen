# node-agilezen

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

# License

Copyright (c) 2011 Mark Borcherding 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
