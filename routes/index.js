var PoisDAO = require('../pois');

module.exports = exports = function(app, db) {

    var pois  = new PoisDAO(db);

    app.get('/test', function(req, res){
        res.status(200).send("check index.html ");
    });

    app.get('/pois', findAllPois);

    function findAllPois(req, res, next){
        pois.findAll(function(err, data){
            res.json(data);
        });
    }
}
