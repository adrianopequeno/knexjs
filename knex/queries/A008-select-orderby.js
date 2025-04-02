/**
 * select "first_name", "email" from "users" order by "first_name" desc
 */

const knex = require("../config/database");

const selectOrderBy = knex("users")
  .select("first_name", "email")
  .orderBy("first_name", "desc"); // asc

// query sql
console.log(selectOrderBy.toString());

selectOrderBy
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => {
    knex.destroy();
  });
