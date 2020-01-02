/**
 * MISE EN PLACE DU SERVEUR
*/
/**
 * Une variable contenant le module retourné par require('./app').
 * @type {object} 
 */
var app = require('./app');
/**
 * indique sur quel port le serveur doit écouter pour que le routage fonctionne correctement.
 * @type {object} 
 */
var port = process.env.PORT || 3000;
/**
 * Variable contenant le serveur http retourné par app.listen().
 * @type {object} 
 */
var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    const all_routes = require('express-list-endpoints');
    console.log(all_routes(app));
});
module.exports=server;