exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'testName', address: 'testAddress 21 str', food_handling_license: true, user_type: 'testUserType'},
        {name: 'testName', address: 'testAddress 31 str', food_handling_license: false, user_type: 'testUserType'}
        ]);
    });
};