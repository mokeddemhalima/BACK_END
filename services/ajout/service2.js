/**
 * MISE EN PLACE DU 2 ème  SERVEUR
*/
/**
 * Une variable contenant le module retourné par require('./app2').
 * @type {object} 
 */
var app2 = require('./app2');
/**
 * indique sur quel port le serveur doit écouter pour que le routage fonctionne correctement.
 * @type {object} 
 */
var port2 = process.env.PORT || 4000;
/**
 * Variable contenant le serveur http retourné par app.listen().
 * @type {object} 
 */
var server2 = app2.listen(port2, function() {
    console.log('Express server listening on port ' + port2);
    const all_routes = require('express-list-endpoints');
    console.log(all_routes(app2));
});
module.exports=server2;