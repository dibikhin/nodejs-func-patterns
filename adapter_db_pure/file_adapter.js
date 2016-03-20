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

function get(query, callback) {
    jsonfile.readFile(file, function (err, data) {
        var obj = data[query.id];
        return callback(null, obj);
    });
}

function add(obj, callback) {
    jsonfile.readFile(file, function (err, data) {
        var id = '1234';
        obj.id = id;
        data[id] = obj;
        jsonfile.writeFile(file, data, function (err) {
            return callback(null, obj);
        });
    });
}

function update(conditions, obj, callback) {
    jsonfile.readFile(file, function (err, data) {
        var existing_obj = data[conditions.id];
        var updated_obj = _.extend(existing_obj, obj);
        jsonfile.writeFile(file, updated_obj, function (err) {
            return callback(err, updated_obj);
        });
    });
}

function remove(criteria, callback) {
    jsonfile.readFile(file, function (err, data) {
        delete data[criteria.id];
        jsonfile.writeFile(file, data, function (err) {
            return callback(err);
        });
    });
}
