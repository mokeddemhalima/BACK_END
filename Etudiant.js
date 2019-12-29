
var User = require('./User');
var bdd=require('./bdd');
var Formulaire =require('./Formulaire');

class Etudiant extends User {
    /**
     * Constructeur avec argument.
     * @param {String} motpass Variable contenant le mot de passe de l'étudiant. 
     * @param {String} login Variable contenant l'adresse ou le mot d'utilisation de l'étudiant.
     */
    constructor(motpass,login)
    {
        super(motpass,login);
        this.formulaire=null
    }
    entrerChoix(Choix1,Choix2,Choix3,Matricul, callback) {
       
        return  bdd.query('UPDATE etudiant SET Choix1 = ?,Choix2 = ?, Choix3 = ? WHERE Matricul = ?', [Choix1,Choix2,Choix3,Matricul],callback);
     }
    
}
module.exports=Etudiant;