exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.string('username', 60).notNull().defaultTo(0);
        t.string('password', 60).notNull().defaultTo(0);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.dropColumn('username');
        t.dropColumn('password');
    });
};