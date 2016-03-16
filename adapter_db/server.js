// Entry point

var app = require('./app');
var file_adapter = require('./file_adapter');

// var redis_adapter = require('./redis_adapter');

var fake_mongodb_adapter = require('./fake_mongodb_adapter');
fake_mongodb_adapter.connect('connection string or options');
app.run(fake_mongodb_adapter);
