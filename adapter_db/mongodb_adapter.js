// MongoDB adapter

// Problems:
//  1. Domains (person, user, bill)
//  2. Queries (last updated, top 10, groupings) 

var mongoose = require('mongoose'); // Adaptee
var Person;

module.exports = {
    connect: connect,
    get: get,
    add: add,
    update: update,
    remove: remove
};

function connect(options) {
    mongoose.connect('mongodb://localhost/test');

    Person = mongoose.model('Person', {
        name: String,
        age: Number
    });
}

function get(query, callback) {
    return Person.find(query).exec(callback);

    // where('likes').in(['vaporizing', 'talking']).
    // limit(10).
    // sort('-occupation').
}

function add(doc, callback) {
    var person = new Person(doc);
    return person.save(callback);
}

function update(conditions, doc, callback) {
    return Person.update(conditions, doc, callback);
}

function remove(criteria, callback) {
    return Person.remove(criteria, callback);
}
