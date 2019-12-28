
var User = require('./src/User');
var bdd=require('./src/bdd');
var Formulaire =require('./src/Formulaire');

class Etudiant extends User {
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