var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
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
module.exports = router;