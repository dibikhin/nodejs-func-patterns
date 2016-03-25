// Entry point, injects dependencies to app

var mongoose = require('mongoose'); // Adaptee

var app = require('./app');
var db = require('./db');
var person_model = require('./person_model')(mongoose);
var helpers = require('./helpers');

var fake_mongodb_adapter_raw = require('./adapters/fake_mongodb');

// make the adapter failing if DB interface isn't implemented
var fake_mongodb_adapter = helpers.extend(fake_mongodb_adapter_raw, db);

// TODO inhibit subsequent calls of connect(...)
mongoose.connect('conn str');

app.run(fake_mongodb_adapter, person_model);

// TODO test redis
// TODO test file_ad. on empty dump
// TODO 3 projs: simple (w/o pure & extending), pure, pure w/ extending
