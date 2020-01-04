
/**
 * variable contenant le module retourné par require('./User').
 * @type {object} 
 */
var User = require('./User');
/**
 * variable contenant le module retourné par require('./bdd').
 * @type {object} 
 */
var bdd=require('./bdd');
/**
 * variable contenant le module retourné par require('./Formulaire').
 * @type {object} 
 */
var Formulaire =require('./Formulaire');
/**
 * Classe qui represente un Etudiant.
 */
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
     /**
     * Une méthode qui permet d'inserer les données concernant l'étudiant dans la base de données.
     * @param {string} Choix1 Variable contenant le 1 er choix (de la liste SIQ/SIT/SIL) de l'étudiant.
     * @param {string} Choix2 Variable contenant le 2 eme choix (de la liste SIQ/SIT/SIL) de l'étudiant.
     * @param {string} Choix3 Variable contenant le 3 eme choix (de la lsite SIQ/SIT/SIL) de l'étudiant.
     * @param {string} Matricul Variable contenant le matricule de l'étudiant.
     * @param {object} callback Variable contenant les informations des étudiants à inserer dans la base de données.
     *  
     */
    entrerChoix(Choix1,Choix2,Choix3,Matricul, callback) {
       
        return  bdd.query('UPDATE etudiant SET Choix1 = ?,Choix2 = ?, Choix3 = ? WHERE Matricul = ?', [Choix1,Choix2,Choix3,Matricul],callback);
     }
    
}
module.exports=Etudiant;