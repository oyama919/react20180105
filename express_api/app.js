var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('apidata.sqlite3');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/blogs', function(req, res) {
  db.serialize(() => {
    db.all("select * from blogs", (err, item) => {
      if (!err){
        res.json(item);
      }
    });
  });
});

/* Post new */
app.post('/api/blogs/new', function(req, res, next) {
  var tle = req.body.title;
  var con = req.body.contents;
  db.run('insert into blogs (title, contents) values (?, ?)',[tle, con]);
});

/* show and edit */
app.get('/api/blogs/:id', function(req, res, next) {
  db.get('select id, title, contents from blogs where id = $id',
    { $id: req.params.id }, (err, item) => {
      if (!err){
        res.json(item);
      }
  });
});

/* Post edit */
app.post('/api/blogs/edit', function(req, res, next) {
  var id = req.body.id;
  var tle = req.body.title;
  var con = req.body.contents;
  db.run(`update blogs set title=${tle} contents=${con} where id=${id}`);
});


//start: node-dev app.js (npm i -g node-dev)
var server = app.listen(3001, function() {
  console.log('app listening on port ' + server.address().port);
});
