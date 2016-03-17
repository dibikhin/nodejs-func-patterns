// MongoDB adapter, pure

module.exports = {
    init: init,
    get: get,
    add: add,
    update: update,
    remove: remove
};

// TODO inhibit subsequent calls of init(...)
function init(client, options, callback) {   
    var model = client.model(options.model_name, options.schema);
    return callback(null, model);
}

function get(client, query, callback) {
    return client.find(query).exec(callback);
}

function add(client, doc, callback) {
    var model = new client(doc); // 'client' awaits a mongoose 'model' indeed
    return model.save(callback);
}

function update(client, conditions, doc, callback) {
    return client.update(conditions, doc, callback);
}

function remove(client, criteria, callback) {
    return client.remove(criteria, callback);
}
