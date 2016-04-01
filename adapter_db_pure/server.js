// Entry point, injects dependencies to app

var mongoose = require('mongoose'); // Adaptee

var app = require('./app');
var db = require('./db');
var person_model = require('./person_model_factory')(mongoose);
var helpers = require('./helpers');


var redis = require('redis'); // Adaptee
var redis_client = redis.createClient();
redis_client.on('error', function (err) {
    console.log('Error ' + err);
});

var fake_mongodb_adapter_raw = require('./adapters/redis');

// make the adapter failing if DB interface isn't implemented
var fake_mongodb_adapter = helpers.extend(fake_mongodb_adapter_raw, db);

// TODO inhibit subsequent calls of connect(...)
// mongoose.connect('conn str');

// app.run(fake_mongodb_adapter, person_model);

app.run(fake_mongodb_adapter, redis_client);

// test redis: OK
// test file_ad. on empty dump: OK
// TODO split redis/file/mongo/fake test runners
// TODO 3 projs: simple (w/o pure & extending), pure, pure w/ extending
