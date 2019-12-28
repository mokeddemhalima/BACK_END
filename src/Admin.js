
var User = require('./src/User');
var bdd = require('./src/bdd');
class Admin extends User {
  /**
   * 
   * @param {any} motpass le mot de passe de l'administrateur 
   * @param {any} login 
   */
    constructor(motpass,login){
    super(motpass,login);
    }
      getInfo(callback)
      {
        return bdd.query('SELECT * FROM etudiant', callback);
      }   
}
module.exports=Admin;