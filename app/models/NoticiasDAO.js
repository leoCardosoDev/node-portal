function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias', callback);
};

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id_noticia = 2', callback);
};

NoticiasDAO.prototype.salvarNoticias = function(noticia, callback){
    this._connection.query('insert into noticias set ? ', noticia, callback);
};

module.exports = function(){
    return NoticiasDAO;
};