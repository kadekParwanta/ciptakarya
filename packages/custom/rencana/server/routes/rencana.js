(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Rencana, app, auth, database, circles) {

        var requiresAdmin = circles.controller.hasCircle('admin');
        var requiresLogin = circles.controller.hasCircle('authenticated');
        var rencana = require('../controllers/rencana');

        app.get('/api/rencana/example/anyone', function(req, res) {
            res.send('Anyone can access this');
        });

        app.get('/api/rencana/example/auth', requiresLogin, function(req, res) {
            res.send('Only authenticated users can access this');
        });

        app.get('/api/rencana/example/admin', requiresAdmin, function(req, res) {
            res.send('Only users with Admin role can access this');
        });

        app.get('/api/rencana/example/render', function(req, res) {
            Rencana.render('index', {
                package: 'rencana'
            }, function(err, html) {
                //Rendering a view from the Package server/views
                res.send(html);
            });
        });
        
        app.get('/api/rencana', function(req, res) {
            rencana.all(req, res);
        });
        
        app.post('/api/rencana', function(req, res) {
            rencana.create(req, res);
        });
        
        app.get('/api/rencana/:rencanaId', function(req, res) {
            rencana.show(req, res);
        });
        
        app.put('/api/rencana/:rencanaId', requiresLogin, function(req, res) {
            rencana.update(req, res);
        });
        
        app.delete('/api/rencana/:rencanaId', requiresLogin, function(req, res) {
            rencana.destroy(req, res);
        });
    };
})();
