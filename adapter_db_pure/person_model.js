module.exports = create;

function create(mongoose) {
    var person_schema = {
        name: String,
        age: Number
    };

    return mongoose.model('Person', person_schema);
};
