/**
 * Variable contenant le module retourné par require('./User').
 * @type {object}
 */
var User = require('./User');
/**
 * Variable cntenant le module rtourné par require('./bdd').
 * @type {any}
 */
var bdd = require('./bdd');
/**
 * Une Classe qui represente l'administrateur.
 */
class Admin extends User {
  /**
   * 
   * @param {any} motpass le mot de passe de l'administrateur. 
   * @param {any} login L'adresse ou le nom d'utilisation de l'administrateur.
   */
    constructor(motpass,login){
  
    super(motpass,login);
    }
    /**
     * Une methode qui retourne les informations des étudiants à partir de la base de données.
     * @param {any} callback Fonction contenat toutes les nformations concernant l'étudiant (nom,prenom,matricule,moyenne,choix1,choix2,choix3).
     */
      getInfo(callback)
      {

        return bdd.query('SELECT * FROM etudiant', callback);
      }   
}
module.exports=Admin;