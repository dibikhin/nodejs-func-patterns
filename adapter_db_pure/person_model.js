var mongoose = require('mongoose');

var person_schema = {
    name: String,
    age: Number
};

var person_model = mongoose.model('Person', person_schema);

module.exports = person_model;
