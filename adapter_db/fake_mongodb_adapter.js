// Fake MongoDB adapter for dependency injection

var person = {
    id: '1234',
    name: 'Mary',
    age: 21
};

module.exports = {
    connect: connect,
    get: get,
    add: add,
    update: update,
    remove: remove
};

function connect(options) {
    console.log('connected to fake MongoDB adapter');
}

function get(query, callback) {
    return callback(null, person);
}

function add(doc, callback) {
    return callback(null, person);
}

function update(conditions, doc, callback) {
    var updated_person = {
        id: '1234',
        name: 'Mary',
        age: 32
    };
    return callback(null, updated_person);
}

function remove(criteria, callback) {
    return callback(null);
}
