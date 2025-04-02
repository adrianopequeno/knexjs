/**
 * select * from users
 * where id in (10, 15, 20, 30)
 * and firts_name in ('Fulano', 'Ciclano', 'Beltrano');
 */

const knex = require("../config/database");

const selectIn = knex("users")
  .select("id", "first_name")
  .whereIn("id", [10, 20, 25, 30]);

// query sql
console.log(selectIn.toString());

selectIn
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => {
    knex.destroy();
  });
