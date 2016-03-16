// Fake MongoDB adapter, w/o adaptee
var _ = require('underscore');

var db = require('./db');

var person = {
    id: '1234',
    name: 'Mary',
    age: 21
};

var functions = {
    init: init,
    get: get,
    add: add,
    update: update,
    remove: remove
};

// to be sure it's following the DB interface
var FakeMongoDBAdapter = _.extend({}, db);
FakeMongoDBAdapter = _.extend(FakeMongoDBAdapter, functions);

module.exports = FakeMongoDBAdapter; 

function init(options) {
    console.log('initialized fake MongoDB adapter');
}

function get(query, callback) {
    return callback(null, person);
}

function add(doc, callback) {
    return callback(null, person);
}

function update(conditions, doc, callback) {
    var updated_person = {
        id: '1234',
        name: 'Mary',
        age: 32
    };
    return callback(null, updated_person);
}

function remove(criteria, callback) {
    return callback(null);
}
