var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});
var port = process.env.PORT || 1408;
var path = require ('path');

//spin up a server
app.listen(port, function(){
  console.log('server is listening on port 1408');
});

app.get('/', function(req, res){
  res.sendFile(path.resolve('public/index.html'));
});

app.use(express.static('public'));
