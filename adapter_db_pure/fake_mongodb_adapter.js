// Fake MongoDB adapter, w/o adaptee
var person = {
    id: '1234',
    name: 'Mary',
    age: 21
};


module.exports = {
    init: init,
    get: get,
    add: add,
    update: update,
    remove: remove
};

function init(client, options, callback) {
    console.log('initialized fake MongoDB adapter');
    return callback(null);
}

function get(client, query, callback) {
    return callback(null, person);
}

function add(client, doc, callback) {
    return callback(null, person);
}

function update(client, conditions, doc, callback) {
    var updated_person = {
        id: '1234',
        name: 'Mary',
        age: 32
    };
    return callback(null, updated_person);
}

function remove(client, criteria, callback) {
    return callback(null);
}
