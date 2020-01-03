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
var app1 = express();
/**
 * Variable contenant le module retourné par require('./controleur').
 * @type {object} 
 */
var service1 = require('./service1');
app1.use('/etud1', service1);
module.exports = app1;