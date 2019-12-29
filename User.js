var bdd=require('./bdd');
class User {
   /**
    * 
    * @param {string} motpass 
    * @param {string} login 
    */
    constructor(motpass,login){
       this.motpass=motpass;
       this.login=login;
    }
    /**
     * une methode qui affiche le matricule
     * @param {*} id  variable contenant le matricule.
     */
   afficher(id){
       
   }
}module.exports=User;