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
 * une variable contenant le module retourné par require('./Etudiant').
 * @type {object} 
 */
var Etudiant = require('./Etudiant');
/**
 *  une variable contenant le module retourné par require('./Admin').
 * @type {object}
  */
var Admin = require('./Admin');
/**
 * une variable contenant le module retourné par require('./bdd').
 * @type {object} 
 */
var bdd = require('./bdd');
var nodemailer=require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

/**
 * Une route pour afficher les choix des étudiants par l'admin.
 *  @type {any} 
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
 * une route pour ajouter les étudiants dans la base de donénes
 * @type {any} 
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
router.post('/email', function(req, res, next) {
    var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 535,
    auth: {
      user: 'gh_mokeddem@esi.dz',
      pass: 'halima1986'
    }
  }));
  
  var mailOptions = {
    from:'gh_mokeddem@esi.dz',
    to: req.body.destination,
    subject:req.body.subject,
    text: req.body.message
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(503).json(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json(info.response);
    }
  }); 
  transporter.close(); 
   
});


module.exports = router;
