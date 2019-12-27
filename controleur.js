/********************création du controleur*************** */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Etudiant = require('./Etudiant');
var Admin = require('./Admin');
var bdd = require('./bdd');
/*route pour afficher les choix des etudiants par l'admine*/
router.get('/afficher', function (req, res) {
    var A =new Admin();
        A.getInfo(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
/* route pour ajouter les choix des etudiants par l'etudiant*/
router.put('/ajouter', function (req, res) {
    var E =new Etudiant();
        E.entrerChoix(req.body.Choix1,req.body.Choix2,req.body.Choix3,req.body.Matricul,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});
module.exports = router;