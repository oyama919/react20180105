var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/blogs', function(req, res) {
  res.json([
    {
      id: '1',
      title: 'some title1',
      contents: 'Lorem ipsum dolor sit amet.'
    }, {
      id: '2',
      title: 'some title2',
      contents: 'Lorem ipsum dolor sit amet.'
    }, {
      id: '3',
      title: 'some title3',
      contents: 'Lorem ipsum dolor sit amet.'
    }, {
      id: '4',
      title: 'some title4',
      contents: 'Lorem ipsum dolor sit amet.'
    }, {
      id: '5',
      title: 'some title5',
      contents: 'Lorem ipsum dolor sit amet.'
    }
  ]);
});

//start: node-dev app.js (npm i -g node-dev)
var server = app.listen(3001, function() {
  console.log('app listening on port ' + server.address().port);
});
