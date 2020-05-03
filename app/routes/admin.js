module.exports = function (app) {

    app.get('/form_add', function (req, res) {
        res.render('admin/form_add_noticia', {validacao: {}, noticia: {}});
    });

    app.post('/noticias/salvar', function (req, res) {
        var noticia = req.body;

        req.assert('titulo', 'O titulo é obrigatório!').notEmpty();
        req.assert('autor', 'O autor é obrigatório!').notEmpty();
        req.assert('data_noticia', 'A data da noticia é obrigatório!').notEmpty().isDate({ format: 'YYYY/MM/DD' });
        req.assert('resumo', 'O resumo deve ter entre 10 e 100 caracteres').len(10, 100);
        req.assert('noticia', 'A noticia é obrigatório!').notEmpty();


        var erros = req.validationErrors();

        if (erros) {
            res.render('admin/form_add_noticia', {validacao: erros, noticia: noticia});
            return;

        }


        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticias(noticia, function (error, result) {
            res.redirect('/noticias');
        });

    });

};
