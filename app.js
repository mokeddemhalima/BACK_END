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
/**
 * Variable contenant le module retourné par require('./controleur').
 * @type {object} 
 */
var controleur = require('./controleur');
app.use('/etud', controleur);
module.exports = app;