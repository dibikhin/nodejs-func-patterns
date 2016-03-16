// server.js, Entry point

var fake_mongodb_adapter = require('./fake_mongodb_adapter');
var app = require('./app');

app.run(fake_mongodb_adapter);


// app.js

module.exports = {
    run: run
};

function run(db) {
    db.connect('something');

    db.get({ id: '1234' }, function (err, found_person) {
        console.log('found person: ' + JSON.stringify(found_person));
    });
}


// mongodb_adapter.js

var mongoose = require('mongoose'); // Adaptee
var Person;

module.exports = {
    connect: connect,
    get: get
};

function connect(options) {
    mongoose.connect(options);

    Person = mongoose.model('Person', {
        name: String,
        age: Number
    });
}

function get(query, callback) {
    var mongo_query = { _id: query.id };
    return Person.find(mongo_query).exec(callback);
}


// redis_adapter.js

var redis = require('redis'); // Adaptee
var client;

module.exports = {
    connect: connect,
    get: get
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


// fake_mongodb_adapter.js

var person = {
    id: '1234',
    name: 'Mary',
    age: 21
};

module.exports = {
    connect: connect,
    get: get
};

function connect(options) {
    console.log('connected to fake MongoDB adapter');
}

function get(query, callback) {
    return callback(null, person);
}


// db.js, Interface expected by a client

module.exports = {
    connect: connect,
    get: get
};

function connect(options) { }

function get(query, callback) { }
