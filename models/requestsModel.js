const db = require('../data/dbConfig.js');

module.exports = {
    getAll,
    insert,
    findById,
    remove,
    update
};

function getAll() {
    return db('requests')
}

function insert(data) {
    return db('requests')
    .insert(data)
}

function findById(id) {
    return db('requests')
    .where('id', id)
}

function update(id, changes){
    return db('requests')
    .where('id', id)
    .update(changes)

}

function remove(id){
    return db('requests')
    .where('id', id)
    .del()
}
