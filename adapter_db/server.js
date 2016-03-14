// Entry point

var fake_mongodb_adapter = require('./fake_mongodb_adapter');
var file_adapter = require('./file_adapter');
// var redis_adapter = require('./redis_adapter');

var app = require('./app');

// app.run(fake_mongodb_adapter);

app.run(file_adapter);
