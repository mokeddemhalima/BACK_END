/**
 * création du 2ème service
 */
/**
 * Une variable contenant le module retourné par require('express').
 * @type {object} 
 */
var express = require('express');
/**
 * Une variable contenant un gestionnaire de route créé par express.Router().
 * @type {any}
 */
var router2 = express.Router();
/**
 * Une variable contenant le module retouré par require('body-parser').
 * @type {object} 
 */
var bodyParser = require('body-parser');
router2.use(bodyParser.json());
/**
 * une variable contenant le module retourné par require('./Etudiant').
 * @type {object} 
 */
var Etudiant = require('./Etudiant');
var nodemailer=require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

/**
 * une route pour ajouter les étudiants dans la base de données
 * @type {any} 
 */
router2.put('/ajouter', function (req, res) {
  var E = new Etudiant();
      E.Matricul=req.body.Matricul;
      E.Choix1=req.body.Choix1;
      E.Choix2 =req.body.Choix2;
      E.Choix3 =req.body.Choix3;
      E.entrerChoix(req.body.Choix1,req.body.Choix2,req.body.Choix3,req.body.Matricul,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else if(count.affectedRows==0)
              {
                res.json({ message: 'Le Matricul n est pas valide', E });
              }else
                res.json({ message: 'Choix ajouté!', E });
      });
});
/**
 * une route pour envoyer un email aune destination prcise.
 * @type {any} 
 */
router2.post('/email', function(req, res, next) {
  var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 535,
  auth: {
    user: 'gh_mokeddem@esi.dz',
    pass: 'halima1986'
  }
}));
var email = {
  destination:req.body.destination,
  subject:req.body.subject,
  message:req.body.message, 
  sender:"gh_mokeddem@esi.dz"
}

var mailOption = {
  from:'gh_mokeddem@esi.dz',
  to: email.destination,
  subject:email.subject,
  text: email.message
};

transporter.sendMail(mailOption, function(error, info){
  if (error) {
    console.log(error);
    res.json(error);
  } else {
    console.log('Email sent: ' + info.response);
    res.json({message:"lemail est envoyé!",email})
  }
}); 
transporter.close();   
});
module.exports = router2;