/**
 * select * from users
 * where
 * created_at < '2025-04-01 20:38:20.34'
 * and first_name = Fulano
 * and password_hash = 'fulano_hash'
 */

const knex = require("../config/database");

// const select = knex("users").select("*");
// const select = knex("users").select("id", "first_name").where("id", "=", 6);
// const select = knex("users")
//   .select("id", "first_name")
//   .where({ id: 6, first_name: "João" });
// const select = knex("users")
//   .select("id", "first_name")
//   .where("id", "=", 6)
//   .orWhere("id", "=", 5);
const select = knex("users")
  .select("id", "first_name")
  .where("id", "=", 6)
  .andWhere("first_name", "=", "João")
  .orWhere("id", "=", 5);

console.log(select.toString());

select
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR: ", e.message);
  })
  .finally(() => {
    knex.destroy();
  });
