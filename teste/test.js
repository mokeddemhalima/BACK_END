
var chai = require('chai');
var chaiHttp = require('chai-http');
var serveur = require('../serveur');
var should = chai.should();
var Etudiant = require('../Etudiant');

chai.use(chaiHttp);
 /*
  * Test the /GET route
  */
describe('/GET afficher', () => {
    it('should list ALL students on /afficher GET', function(done) {
        chai.request(serveur)
        .get('/etud/afficher')
        .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
        });
    });
    
});
 describe('/PUT/:Matricul', () => {
      it('should update a SINGLE student on /ajouter given Matricul', function(done) {
        let E = new Etudiant({Matricul:"16/10",Choix1:"sit",Choix2:"sil",Choix3:"siq"})
            /*chai.request('http://localhost:3000/')
            .get('/etud/afficher')
            .end(function(err, res){*/
            E.save((err,E) => {
                chai.request('http://localhost:3000/')
                .put('/etud/ajouter/' + E.Matricul)
                .send({Choix1:"sit",Choix2:"sil",Choix3:"siq"})
                .end((err, res) => {
                      res.should.have.status(200);
                      /*res.body.should.be.a('object');
                      response.body.should.have.property('UPDATED');
                      res.body.should.have.property('message').eql('Choix ajoutés');
                      res.body.book.should.have.property('Coix1').eql("sit");
                      res.body.book.should.have.property('Coix1').eql("sil");
                      res.body.book.should.have.property('Coix1').eql("sic");*/
                  done();
                });
          });
      });
});
