// Entry point

var _ = require('underscore');

var mongoose = require('mongoose'); // Adaptee

var app = require('./app');
var mongodb_adapter = require('./mongodb_adapter');
var person_schema = require('./person_schema');
var db = require('./db');

var options = {
    schema: person_schema,
    model_name: 'Person',
    connection_string: 'conn str'
};


// TODO inhibit subsequent calls of connect(...)
// mongoose.connect(options.connection_string);

// mongodb_adapter.init(mongoose, options, function run_app(err, person_model) {
//     app.run(mongodb_adapter, person_model);
// });


var fake_mongodb_adapter_raw = require('./fake_mongodb_adapter');

// make the adapter failing if DB interface isn't implemented
var fake_mongodb_adapter = _.extend({}, db);
fake_mongodb_adapter = _.extend(fake_mongodb_adapter, fake_mongodb_adapter_raw);

mongoose.connect(options.connection_string);
fake_mongodb_adapter.init(mongoose, options, function run_app(err, person_model) {
    app.run(fake_mongodb_adapter, person_model);
});
