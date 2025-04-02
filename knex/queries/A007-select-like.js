/**
 * select * from users
 * where first_name like '%ma%_';
 */

const knex = require("../config/database");

const selectWhereLike = knex("users")
  .whereLike("email", "%mail%") // 1º filtro: o email deve conter "mail"
  .andWhereLike("email", "%.com") // 2º filtro: o email deve conter ".com"
  .orWhereLike("email", "%name%"); // 3º filtro: ou o email deve conter "name"

// query sql
console.log(selectWhereLike.toString());

selectWhereLike
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => {
    knex.destroy();
  });
