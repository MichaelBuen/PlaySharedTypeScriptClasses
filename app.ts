import express = require('express');

import path = require('path');

import bodyParser = require('body-parser'); 

import extend = require('extend');


class ExternalizedDomain {
    static Person : typeof Domain.Person = require('./shared/Domain/Person').DomainPerson;
    static Country : typeof Domain.Country = require('./shared/Domain/Country').DomainCountry;
    
    static Calculator : typeof Calculator = require('../shared/Domain/Calculator').Calculator;
}


var app = express();


app.get('/', (req,res) => res.send('Hello Lambda World!'));

  
  var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});



app.use('/', express.static( path.join(__dirname, 'public'), { extensions: ['html'] })); // if entered a url without an extension, attach html
app.use('/angular', express.static( path.join(__dirname, 'node_modules', 'angular') ));
app.use('/jquery', express.static( path.join(__dirname, 'node_modules', 'jquery') ));
app.use('/requirejs', express.static( path.join(__dirname, 'node_modules', 'requirejs') )); 

app.use('/shared', express.static( path.join(__dirname, 'shared') )); 

app.use(bodyParser.json());
app.post('/api/person', (req,res) => {
   
   
  var person = new ExternalizedDomain.Person();  
  extend(person, req.body);
            
  var messages = person.validate();  
   
  if (messages.length > 0)
      res.status(400).json(messages);
  else
      res.send('OK'); 
    
});