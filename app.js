(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", 'express', 'path', 'body-parser', 'extend'], function (require, exports) {
    var express = require('express');
    var path = require('path');
    var bodyParser = require('body-parser');
    var extend = require('extend');
    var ExternalizedDomain = (function () {
        function ExternalizedDomain() {
        }
        ExternalizedDomain.Person = require('./shared/Domain/Person').DomainPerson;
        ExternalizedDomain.Country = require('./shared/Domain/Country').DomainCountry;
        ExternalizedDomain.Calculator = require('../shared/Domain/Calculator').Calculator;
        return ExternalizedDomain;
    })();
    var app = express();
    app.get('/', function (req, res) { return res.send('Hello Lambda World!'); });
    var server = app.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('Example app listening at http://%s:%s', host, port);
    });
    app.use('/', express.static(path.join(__dirname, 'public'), { extensions: ['html'] })); // if entered a url without an extension, attach html
    app.use('/angular', express.static(path.join(__dirname, 'node_modules', 'angular')));
    app.use('/jquery', express.static(path.join(__dirname, 'node_modules', 'jquery')));
    app.use('/requirejs', express.static(path.join(__dirname, 'node_modules', 'requirejs')));
    app.use('/shared', express.static(path.join(__dirname, 'shared')));
    app.use(bodyParser.json());
    app.post('/api/person', function (req, res) {
        var person = new ExternalizedDomain.Person();
        extend(person, req.body);
        var messages = person.validate();
        if (messages.length > 0)
            res.status(400).json(messages);
        else
            res.send('OK');
    });
});
//# sourceMappingURL=app.js.map