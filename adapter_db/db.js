// Generic DB interface used by the client,
// it shouldn't be changed.

// db.connect(options, callback)
// db.get(query, callback)
// db.add(obj, callback)
// db.update(conditions, obj, callback)
// db.remove(criteria, callback)

module.exports = {
    connect: connect,
    get: get,
    add: add,
    update: update,
    remove: remove
};

function connect(options) {
    throw new Error('Function "connect" not implemented');
}

function get(query, callback) {
    throw new Error('Function "get" not implemented');
}

function add(obj, callback) {
    throw new Error('Function "add" not implemented');
}

function update(conditions, obj, callback) {
    throw new Error('Function "update" not implemented');
}

function remove(criteria, callback) {
    throw new Error('Function "remove" not implemented');
}
