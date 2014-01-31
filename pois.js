
function PoisDao(db) {
    "use strict";
    var poisCollection = db.collection('pois');

    this.findAll = function(callback) {
        poisCollection.find().toArray(callback);
    };
};

module.exports = PoisDao;