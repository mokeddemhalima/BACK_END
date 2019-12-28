/***************************EXPOSITION DES SERVICES WEB************** */

var express = require('express');
var app = express();
app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});

var controleur = require('./src/controleur');
app.use('/etud', controleur);
module.exports = app;