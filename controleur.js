/********************création du controleur*************** */
var Etudiant = require('./Etudiant');
var Admin = require('./Admin');
var bdd = require('./bdd');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var nodemailer=require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
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
        E. Matricul=req.body.Matricul;
        E.Choix1=req.body.Choix1;
        E.Choix2 =req.body.Choix2;
        E.Choix3 =req.body.Choix3;
        E.entrerChoix(req.body.Choix1,req.body.Choix2,req.body.Choix3,req.body.Matricul,function(err,count){
        if(err)
        {
          res.status(400).json(err);
        
        }
        else{
          res.json({ message: 'Choix ajouté!', E })
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
module.exports = router;
