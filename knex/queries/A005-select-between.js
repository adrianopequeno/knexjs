/**
 * select * from users
 * where
 * created_at between '2020-06-12 00:00:00'
 * and '2020-09-04 00:00:00'
 * and id between 40 and 70;
 */

const knex = require("../config/database");

const selectBetween = knex("users")
  .select("id", "first_name")
  .whereBetween("id", [40, 70])
  .orWhereBetween("id", [10, 20]);

// query sql
console.log(selectBetween.toString());

selectBetween
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => {
    knex.destroy();
  });
