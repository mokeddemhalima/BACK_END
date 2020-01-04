/**
 * EXPOSITION  de service 2
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
var app2 = express();
/**
 * Variable contenant le module retourné par require('./controleur').
 * @type {object} 
 */
var service2 = require('./service2');
app2.use('/etud2', service2);
module.exports = app2;