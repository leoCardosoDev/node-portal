var mysql = require('mysql');

var connMySQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias',
        port: 3307
    });
};

module.exports = function () {
    return connMySQL;
}