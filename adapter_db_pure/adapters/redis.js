// Redis adapter

var _ = require('underscore');

module.exports = {
    get: get,
    add: add,
    update: update,
    remove: remove
};

function get(client, query, callback) {
    client.get(query._id, function(err, reply) {
        return callback(null, reply);
    });
}

function add(client, obj, callback) {
    var _id = '1234';
    obj._id = _id;
    client.set(_id, JSON.stringify(obj), function(err, reply) {
        return callback(null, obj);
    });
}

// obj is an object of new values
function update(client, conditions, obj, callback) {
    client.get(conditions._id, function(err, reply) {
        var updated_obj = JSON.stringify(_.extend(reply, obj));
        client.set(conditions._id, updated_obj, function(err, reply) {
            return callback(null, updated_obj);
        });
    });
}

function remove(client, criteria, callback) {
    return client.del(criteria._id, callback);
}
