class Formulaire {
    /**
     * 
     * 
     * @param {string} id Variable contenant le matricule de l'étudiant.
     * @param {strig} nom Variable contenant le nom de l'étudiant.
     * @param {string} prenom Variable contenant le prénom de l'étudiant.
     * @param {email} email Variable conenant l'Email de l'étudiant.
     * @param {string} choix1 Variable contenant le 1 er choix(de la liste SIQ/SIT/SIL) de l'étudiant. 
     * @param {string} choix2 Variable contenant le 1 er choix(de la liste SIQ/SIT/SIL) de l'étudiant. 
     * @param {string} choix3 Variable contenant le 1 er choix(de la liste SIQ/SIT/SIL) de l'étudiant. 
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