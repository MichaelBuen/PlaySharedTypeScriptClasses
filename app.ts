import express = require('express');

import path = require('path');

import bodyParser = require('body-parser'); 

import extend = require('extend');



class ExternalizedDomain {
    static Person : typeof Domain.Person = require('./shared/Domain/Person.js').DomainPerson;
}


var app = express();







app.get('/', (req,res) => res.send('Hello Lambda World!'));

  
  var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


app.use(bodyParser.json());

app.use('/', express.static( path.join(__dirname, 'public'), { extensions: ['html'] })); // if entered a url without an extension, attach html


app.use('/angular', express.static( path.join(__dirname, 'node_modules', 'angular') )); 

app.use('/shared', express.static( path.join(__dirname, 'shared') )); 

app.post('/api/person', (req,res) => {

  
  
  var person = <Domain.Person> extend(new ExternalizedDomain.Person(), req.body);
            
  let messages = person.validate();  
  
  if (messages.length > 0)
      res.status(400).json(messages);
  else
      res.send('OK'); 
    
});