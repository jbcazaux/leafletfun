//imports
var express = require('express'),
    MongoClient = require('mongodb').MongoClient
    routes = require('./routes');
//running port
var port = 8080;

MongoClient.connect('mongodb://localhost:27017/leafletfundb', function(err, db) {

    var app = express();
    app.use('/', express.static(__dirname + "/web"));
    routes(app, db);
    app.listen(port);

    console.log("listening on " + port);
});



