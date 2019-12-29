/**
 * @type {object} Une variable contenant le module retourné pas require('mysql').
 */
var mysql      = require('mysql');

var connection = mysql.createConnection({
    /**
     * @type {string} le hostname de la base de données, par defaut localhost.
     */
    host     : 'localhost',
    /**
     * @type {string} L'utilisateur de la base de données.
     */
    user     : 'root',
    /**
     * @type {string} Le mot de passe de l'utilisateur de la base de données.
     */
    password : '',
    /**
     * Le nom de la base de données à utiliser pour la connection.
     * @type {string} 
     */
    database :'base'
});
    module.exports=connection;