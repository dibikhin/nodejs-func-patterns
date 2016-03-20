// Entry point

var util = require('util');

var mongoose = require('mongoose'); // Adaptee

var app = require('./app');
var db = require('./db');
var person_model = require('./person_model');
var helpers = require('./helpers');

var fake_mongodb_adapter_raw = require('./fake_mongodb_adapter');

// make the adapter failing if DB interface isn't implemented
var fake_mongodb_adapter = helpers.extend(fake_mongodb_adapter_raw, db);

// TODO inhibit subsequent calls of connect(...)
mongoose.connect('conn str');
app.run(fake_mongodb_adapter, person_model);
