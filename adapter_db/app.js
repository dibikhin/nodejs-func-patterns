// The client app

module.exports = {
    run: run
};

function run(db) {
    var person = {
        name: 'Mary',
        age: 21
    };

    db.add(person, function (err, added_person) {
        console.log('added person id: ' + added_person.id);

        db.get({ id: '1234' }, function (err, found_person) {
            console.log('found person: ' + JSON.stringify(found_person));

            db.update({ id: '1234' }, { age: 32 }, function (err, updated_person) {
                console.log('updated person: ' + JSON.stringify(updated_person));
            });
        });
    });
}
