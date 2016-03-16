// Entry point

var mongoose = require('mongoose'); // Adaptee

var app = require('./app');
var mongodb_adapter = require('./mongodb_adapter');
var person_schema = require('./person_schema');

var options = {
    schema: person_schema,
    model_name: 'Person',
    connection_string: 'connection string'
};

mongoose.connect(options.connection_string);

mongodb_adapter.init(mongoose, options, function (err, model) {
   app.run(mongodb_adapter, model); 
});
