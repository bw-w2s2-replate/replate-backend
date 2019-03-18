exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('name', 60).notNullable();
        tbl.string('address', 255).notNullable();
        tbl.boolean('food_handling_license');
        tbl.string('user_type', 255).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};