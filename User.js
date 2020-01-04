/**
 * Variable contenant le module retourné par require('./bdd').
 * @type {object} 
 */
var bdd=require('./bdd');
/**
 * @class
 * Classe qui represente un User.
 */
class User {
   /**
    * 
    * @param {string} motpass Variable contenant le mot de passe de l'utilisateur.
    * @param {string} login Variable contenant l'adresse ou le nom d'utilisateur.
    */
    constructor(motpass,login){
       this.motpass=motpass;
       this.login=login;
    }
    /**
     * 
     * Methode pour afficher les données à partir de la bdd.
     * @param {object} id 
     */
   afficher(id){
       
   }
}module.exports=User;