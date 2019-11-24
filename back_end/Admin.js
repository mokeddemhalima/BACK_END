var bdd = require('./bdd');

var Admin = {
    getInfo: function(callback)
    {
        return bdd.query('SELECT * FROM etudiant', callback);
    }   
}
module.exports = Admin;