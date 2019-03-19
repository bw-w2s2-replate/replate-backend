const db = require('../data/dbConfig.js');

module.exports = {
    getAll,
    insert,
    findById,
    remove,
    update
};

function getAll() {
    return db('users')
}

function insert(data) {
    return db('users')
    .insert(data)
}

function findById(id) {
    return db('users')
    .where('id', id)
}

function update(id, changes){
    return db('users')
    .where('id', id)
    .update(changes)

}

function remove(id){
    return db('users')
    .where('id', id)
    .del()
}
