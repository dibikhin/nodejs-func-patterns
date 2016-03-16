// The client app

module.exports = {
    run: run
};

function run(db, model) {
    var person = {
        name: 'Mary',
        age: 21
    };

    db.add(model, person, function (err, added_person) {
        var id = added_person.id;
        console.log('added person id: ' + id);

        db.get(model, { _id: id }, function (err, found_person) {
            console.log('found person: ' + JSON.stringify(found_person));

            db.update(model, { _id: id }, { age: 32 }, function (err, updated_person) {
                console.log('updated person: ' + JSON.stringify(updated_person));
                
                process.exit(0);
            });
        });
    });
}
