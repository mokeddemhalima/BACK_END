/*var bdd = require('./bdd');

var Admin = {
    getInfo: function(callback)
    {
        return bdd.query('SELECT * FROM etudiant', callback);
    }   
}
module.exports = Admin;*/
var User = require('./User');
var bdd = require('./bdd');
class Admin extends User {
    constructor(motpass,login){
    super(motpass,login);
    }
      getInfo(callback)
      {
        return bdd.query('SELECT * FROM etudiant', callback);
      }   
}
module.exports=Admin;