/**
 * Une variable contenant le module retourné pas require('mysql').
 * @type {object} 
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    /**
     * le hostname de la base de données, par defaut localhost.
     * @type {string} 
     */
    host     : 'localhost',
     /**
      * L'utilisateur de la base de données.
      * @type {string} 
      */
    user     : 'root',
     /**
      * Le mot de passe de l'utilisateur de la base de données. 
      * @type {string} 
      */
    password : '',
    /**
     * Le nom de la base de données à utiliser pour la connection.
     * @type {string} 
     */
    database :'base'
});
connection.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection bdd established');
});
    module.exports=connection;