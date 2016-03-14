// Generic DB interface, Adaptee
// Not used, just an example of interface

module.exports = {
    connect: connect,
    get: get,
    add: add,
    update: update,
    remove: remove
};

function connect(options) { }

function get(query, callback) { }

function add(obj, callback) { }

function update(conditions, obj, callback) { }

function remove(criteria, callback) { }
