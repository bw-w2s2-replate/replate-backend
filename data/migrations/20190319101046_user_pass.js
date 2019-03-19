exports.up = function(knex) {
    return knex.schema.createTable('user_pass', tbl => {
      tbl.increments();
      tbl.string('username', 255).notNullable().unique();
      tbl.string('password', 255).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_pass');
  };
