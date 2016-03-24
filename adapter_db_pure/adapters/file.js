// File adapter

var _ = require('underscore');
var jsonfile = require('jsonfile'); // Adaptee

var file = 'dump.json';

module.exports = {
    get: get,
    add: add,
    update: update,
    remove: remove
};

function get(client, query, callback) {
    jsonfile.readFile(file, function (err, data) {
        var obj = data[query._id];
        return callback(null, obj);
    });
}

function add(client, obj, callback) {
    jsonfile.readFile(file, function (err, data) {
        var _id = '1234';
        obj._id = _id;
        data[_id] = obj;
        jsonfile.writeFile(file, data, function (err) {
            return callback(null, obj);
        });
    });
}

function update(client, conditions, obj, callback) {
    jsonfile.readFile(file, function (err, data) {
        var existing_obj = data[conditions._id];
        var updated_obj = _.extend(existing_obj, obj);
        jsonfile.writeFile(file, updated_obj, function (err) {
            return callback(err, updated_obj);
        });
    });
}

function remove(client, criteria, callback) {
    jsonfile.readFile(file, function (err, data) {
        delete data[criteria._id];
        jsonfile.writeFile(file, data, function (err) {
            return callback(err);
        });
    });
}
