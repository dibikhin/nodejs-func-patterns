// The client app

module.exports = {
    run: run
};

function run(db, client) {
    var person = {
        name: 'Mary',
        age: 21
    };

    db.add(client, person, function (err, added_person) {
        var _id = added_person._id;
        console.log('added person _id: ' + _id);

        db.get(client, { _id: _id }, function (err, found_person) {
            console.log('found person: ' + JSON.stringify(found_person));

            db.update(client, { _id: _id }, { age: 32 }, function (err, updated_person) {
                console.log('updated person: ' + JSON.stringify(updated_person));
                
                process.exit(0);
            });
        });
    });
}
