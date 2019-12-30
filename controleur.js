/**
 * création du controleu
 */
/**
 * Une variable contenant le module retourné par require('express').
 * @type {objecr} 
 */
var express = require('express');
/**
 * Une variable contenant un gestionnaire de route créé par express.Router().
 * @type {any}
 */
var router = express.Router();
/**
 * Une variable contenant le module retouré par require('body-parser').
 * @type {object} 
 */
var bodyParser = require('body-parser');
router.use(bodyParser.json());
/**
 * @type {object} une variable contenant le module retourné par require('./Etudiant').
 */
var Etudiant = require('./Etudiant');
/**
 * @type {object} une variable contenant le module retourné par require('./Admin').
  */
var Admin = require('./Admin');
/**
 * @type {object} une variable contenant le module retourné par require('./bdd').
 */
var bdd = require('./bdd');
/*route pour afficher les choix des etudiants par l'admine*/
/**
 *  @type {any} Une route pour afficher les choix des étudiants.
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
/**
 * @type {any} une route pour ajouter les étudiants dans la base de donénes
 */
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