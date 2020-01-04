/**
 *  Classe qui represente un formulaire.
 */
class Formulaire {
    /**
     * 
     * 
     * @param {string} id  Variable contenant le matricule de l'étudiant.
     * @param {string} nom  Vraibale contenant le nom de l'étudiant.
     * @param {sting} prenom Variable contenant le prenom de l'etudiant. 
     * @param {email} email  Variable contenant l'email de l'etudiant.
     * @param {sting} choix1  Variable contant le 1 er choix de l'etudiant de la liste(SIQ/SIT/SIL)
     * @param {string} choix2  Variable contenant le 2 eme choix de l'etudiant de la liste(SIQ/SIT/SIL)
     * @param {string} choix3  Variable contenant le 3 eme choix de l'etudiant de la liste(SIQ/SIL/SIT)
     */
    constructeur(id,nom,prenom,email,choix1,choix2,choix3){
        this.Matricul=id;
        this.Nom=nom;
        this.Prenom=prenom;
        this.Email=email;
        this.Choix1=choix1;
        this.Choix2=choix2;
        this.Choix3=choix3;
    }
    }module.exports=Formulaire;