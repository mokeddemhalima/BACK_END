/********************création du controleur*************** */
/**
 * @type {object} Une variable contenant le module retourné par require('express').
 */
var express = require('express');
/**
 * 
 */
var router = express.Router();
/**
 * @type {object} Une variable contenant le module retouré par require('body-parser').
 */
var bodyParser = require('body-parser');
router.use(bodyParser.json());
/**
 * @type {Etudiant} une variable contenant le module retourné par require('./Etudiant').
 */
var Etudiant = require('./Etudiant');
/**
 * @type {Admin} une variable contenant le module retourné par require('./Admin').
  */
var Admin = require('./Admin');
/**
 * @type {bdd} une variable contenant le module retourné par require('./bdd').
 */
var bdd = require('./bdd');
/*route pour afficher les choix des etudiants par l'admine*/
/**
 *  @type {object} Une route pour afficher les choix des étudiants.
 */
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