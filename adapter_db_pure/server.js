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

// TODO inhibit subsequent calls of connect(...)
// mongoose.connect(options.connection_string);

// mongodb_adapter.init(mongoose, options, function run_app(err, person_model) {
//     app.run(mongodb_adapter, person_model);
// });


var fake_mongodb_adapter = require('./fake_mongodb_adapter');

fake_mongodb_adapter.init(mongoose, options, function run_app(err, person_model) {
    app.run(fake_mongodb_adapter, person_model);
});
