var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('apidata.sqlite3');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/blogs', function(req, res) {
  db.serialize(() => {
    db.all("select * from blogs", (err, item) => {
      if (!err){
        res.json(item);
      }
    });
  });
});

//start: node-dev app.js (npm i -g node-dev)
var server = app.listen(3001, function() {
  console.log('app listening on port ' + server.address().port);
});
