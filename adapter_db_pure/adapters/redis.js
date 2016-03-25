// Redis adapter

// var redis = require('redis'); // Adaptee
// var redis_client = client.createClient(options);
// redis_client.on('error', function (err) {
//     console.log('Error ' + err);
// });

module.exports = {
    get: get,
    add: add,
    update: update,
    remove: remove
};

function get(client, query, callback) {
    client.get(query._id, function (err, reply) {
        return callback(null, reply);
    });
}

function add(client, obj, callback) {
    var _id = '1234';
    obj._id = _id;
    return client.set(_id, JSON.stringify(obj), callback);
}

function update(client, conditions, obj, callback) {
    return client.set(conditions._id, JSON.stringify(obj), callback);
}

function remove(client, criteria, callback) {
    return client.del(criteria._id, callback);
}
