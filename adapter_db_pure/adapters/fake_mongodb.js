// Fake MongoDB adapter, w/o adaptee

var person = {
    _id: '1234',
    name: 'Mary',
    age: 21
};

module.exports = {
    get: get,
    add: add,
    update: update,
    remove: remove
};

function get(client, query, callback) {
    return callback(null, person);
}

function add(client, doc, callback) {
    return callback(null, person);
}

function update(client, conditions, doc, callback) {
    var updated_person = {
        _id: '1234',
        name: 'Mary',
        age: 32
    };
    return callback(null, updated_person);
}

function remove(client, criteria, callback) {
    return callback(null);
}
