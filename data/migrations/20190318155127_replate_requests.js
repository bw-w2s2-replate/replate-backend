exports.up = function(knex, Promise) {
    return knex.schema.createTable('requests', tbl => {
        tbl.increments();
        tbl.string('food_location', 255).notNullable();
        tbl.integer('food_amount').notNullable();
        tbl.string('food_type', 255).notNullable();
        tbl.date('food_expiration');
        tbl.boolean('claimed ');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('requests');
};