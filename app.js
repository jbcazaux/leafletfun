//imports
var express = require('express');
//running port
var port = 8080;


//server
var app = express();
app.configure(function() {
    app.use(app.router);
    app.use('/', express.static(__dirname + "/web"));
}).listen(process.env.VCAP_APP_PORT || port);
console.log("listening on " + port);

app.get('/test', function(req, res){
    res.status(200).send("check index.html ");
});


