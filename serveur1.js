/**
 * MISE EN PLACE DU 1 erSERVEUR
*/
/**
 * Une variable contenant le module retourné par require('./app1').
 * @type {object} 
 */
var app1 = require('./app1');
/**
 * indique sur quel port le serveur doit écouter pour que le routage fonctionne correctement.
 * @type {object} 
 */
var port1 = process.env.PORT || 3000;
/**
 * Variable contenant le serveur http retourné par app.listen().
 * @type {object} 
 */
var server1 = app1.listen(port1, function() {
    console.log('Express server listening on port ' + port1);
    const all_routes = require('express-list-endpoints');
    console.log(all_routes(app1));
});
module.exports=server1;