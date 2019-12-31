
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var Etudiant = require('../Etudiant');
var serveur = require('../serveur');

chai.use(chaiHttp);
describe('/GET afficher', () => {
    it('should list ALL students on /afficher GET', function(done) {
        chai.request(serveur)
        .get('/etud/afficher')
        .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body[0].should.have.property('Matricul');
            res.body[0].should.have.property('Nom');
            res.body[0].should.have.property('Prenom');
            res.body[0].should.have.property('Choix1');
            res.body[0].should.have.property('Choix2');
            res.body[0].should.have.property('Choix3');
            done();
        });
    });
    
});

describe('/PUT ajouter', () => {
    it('should update the choices of a SINGLE student  on /ajouter given Matricul',function(done) {
        this.timeout(15000);
        var E = new Etudiant()
        E.Matricul ="10" ;
        E.Choix1 ="sit";
        E.Choix2 ="sil";
        E.Choix3 = "siq";  
        chai.request(serveur)
        .put('/etud/ajouter')
        .send(E)
        .end((err, res) => {
            if (err) return done(err);
            should.not.exist(err);
            (err === null).should.be.true;
            should.exist(res);
            res.should.be.json;
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Choix ajouté!');
            res.body.E.should.have.property('Choix1').eql("sit");
            res.body.E.should.have.property('Choix2').eql("sil");
            res.body.E.should.have.property('Choix3').eql("siq");
            done();
        });
    });
});
describe('/POST email', () => { 
    it('it should POST an email ',function (done){
        this.timeout(15000);
        var email = {
            destination:"gh_mokeddem@esi.dz",
            subject:"confirmation email",
            message:"votre code de confirmation :2486", 
            sender:"gh_mokeddem@esi.dz"
        }
        chai.request(serveur)
        .post('/etud/email')
        .send(email)
        .end((err, res) => {
            should.not.exist(err);
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('lemail est envoyé!');
            res.body.email.should.have.property('destination').eql("gh_mokeddem@esi.dz");
            res.body.email.should.have.property('subject').eql("confirmation email");
            res.body.email.should.have.property('message').eql("votre code de confirmation :2486");
            res.body.email.should.have.property('sender').eql("gh_mokeddem@esi.dz");
            done();
        });
    });
}); 