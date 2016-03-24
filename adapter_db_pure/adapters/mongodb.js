// MongoDB adapter, pure

module.exports = {
    get: get,
    add: add,
    update: update,
    remove: remove
};

function get(client, query, callback) {
    return client.find(query).exec(callback);
}

function add(client, doc, callback) {
    var model = new client(doc); // a mongoose model behaves like client
    return model.save(callback);
}

function update(client, conditions, doc, callback) {
    return client.update(conditions, doc, callback);
}

function remove(client, criteria, callback) {
    return client.remove(criteria, callback);
}
