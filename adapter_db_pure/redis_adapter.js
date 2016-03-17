// Redis adapter

// var redis = require('redis'); // Adaptee
//var redis_client = client.createClient(options);

module.exports = {
    init: init,
    get: get,
    add: add,
    update: update,
    remove: remove
};

function init(client, options, callback) {
    client.on('error', function (err) {
        console.log('Error ' + err);
    });
    return callback(null, client);
}

function get(client, query, callback) {
    client.get(query.id, function (err, reply) {
        console.log(reply);
        return callback(null, reply);
    });
}

function add(client, obj, callback) {
    client.set('1234', 'string val', _print);
    return callback(null, '1234');
}

function update(client, conditions, obj, callback) {
    return client.set(conditions.id, JSON.stringify(obj), callback);
}

function remove(client, criteria, callback) {
    return client.del(criteria.id, callback);
}

function _print(err, reply) {
    if (err) {
        console.log(err.toString());
    } else {
        console.log('Reply: ' + reply);
    }
}
