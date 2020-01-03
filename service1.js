/**
 * création du 1er service
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
var router1 = express.Router();
/**
 * Une variable contenant le module retouré par require('body-parser').
 * @type {object} 
 */
var bodyParser = require('body-parser');
router1.use(bodyParser.json());

/**
 *  une variable contenant le module retourné par require('./Admin').
 * @type {object}
  */
var Admin = require('./Admin');
/**
 * une variable contenant le module retourné par require('./bdd').
 * @type {object} 
 */
/**
 * Une route pour afficher les choix des étudiants par l'admin.
 *  @type {any} 
 */
router1.get('/afficher', function (req, res) {
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

module.exports = router1;
