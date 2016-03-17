/** @module DB
 *
 * Generic DB interface used by the client, it shouldn't be changed.
 *
 * db.init(client, options, callback)
 * db.get(client, query, callback)
 * db.add(client, doc, callback)
 * db.update(client, conditions, doc, callback)
 * db.remove(client, criteria, callback)
 */

module.exports = {
    init: init,
    get: get,
    add: add,
    update: update,
    remove: remove
};

function init(client, options, callback) {
    throw new Error('Function "init" not implemented');
}

function get(client, query, callback) {
    throw new Error('Function "get" not implemented');
}

function add(client, doc, callback) {
    throw new Error('Function "add" not implemented');
}

function update(client, conditions, doc, callback) {
    throw new Error('Function "update" not implemented');
}

function remove(client, criteria, callback) {
    throw new Error('Function "remove" not implemented');
}