var bdd = require('./bdd');

var Etudiant = {
    entrerChoix: function (formulaire, callback) {
        return bdd.query(' UPDATE etudiant SET choix1 = formulaire.choix1, choix2 = formulaire.choix2,choix3 = formulaire.choix3 WHERE id =formulaire.matricule', callback)
    }
    
}

module.exports = Etudiant;