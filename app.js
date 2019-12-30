/***************************EXPOSITION DES SERVICES WEB************** */

var express = require('express');
var app = express();
var controleur = require('./controleur');
app.use('/etud', controleur);
module.exports = app;