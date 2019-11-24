/********************création du controleur*************** */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Etudiant = require('./Etudiant');
var Admin = require('./Admin');

router.get('/afficher', function (req, res) {
    Admin.getInfo(function(err,rows){
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
    Etudiant.entrerChoix(req.body,function(err,count){
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