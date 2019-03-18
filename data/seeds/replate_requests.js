exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        {food_location: 'testLocation', food_amount: 2, food_type: 'testType', food_expiration: '2018-03-18', claimed: true},
       
        ]);
    });
};