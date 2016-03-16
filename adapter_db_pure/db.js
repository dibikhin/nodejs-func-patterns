// Generic DB interface used by the client,
// it shouldn't be changed.

module.exports = {
    init: init,
    get: get,
    add: add,
    update: update,
    remove: remove
};

function init(options) {
    throw new Error('Function "init" not implemented');
}

function get(query, callback) {
    return callback(new Error('Function "get" not implemented'));
}

function add(obj, callback) {
    return callback(new Error('Function "add" not implemented'));    
}

function update(conditions, obj, callback) {
    return callback(new Error('Function "update" not implemented'));    
}

function remove(criteria, callback) {
    return callback(new Error('Function "remove" not implemented'));    
}
