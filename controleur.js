/********************création du controleur*************** */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Etudiant = require('./Etudiant');
var Admin = require('./Admin');
var bdd = require('./bdd');
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
