// Redis adapter

var redis = require('redis'); // Adaptee

var client;

module.exports = {
    connect: connect,
    get: get,
    add: add,
    update: update,
    remove: remove
};

function connect(options) {
    client = redis.createClient(options);
    client.on('error', function (err) {
        console.log('Error ' + err);
    });
}

function get(query, callback) {
    client.get(query.id, function (err, reply) {
        console.log(reply);
        return callback(null, reply);
    });
}

function add(obj, callback) {
    client.set('1234', 'string val', redis.print);
    return callback(null, '1234');
}

function update(conditions, obj, callback) {
    return client.set(conditions.id, JSON.stringify(obj), callback);
}

function remove(criteria, callback) {
    return client.del(criteria.id, callback);
}
