/**
 * EXPOSITION DES SERVICES WEB
 */

/**
 * variable contenant le module retourné par require('express').
 * @type {objetc} 
 */

var express = require('express');
/**
 * une variable contenant une nouvelle application express créée par la fonction référence express().
 * @type {object} 
 */
var app = express();
app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});
/**
 * Variable contenant le module retourné par require('./controleur').
 * @type {object} 
 */
var controleur = require('./controleur');
app.use('/etud', controleur);
module.exports = app;