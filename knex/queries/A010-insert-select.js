/**
 * -- insert select -> insere valores em uma tabale usando outra
 * insert into profiles (bio, description, user_id)
 * select concat('Bio of ', first_name),
 * concat('Description of ', first_name),
 * id
 * from users;
 */

const knex = require("../config/database");

const insertSelect = knex(
  knex.raw("?? (??, ??, ??)", ["profiles", "bio", "description", "user_id"])
).insert((qb) => {
  qb.from("users").select(
    knex.raw("concat('Bio de ', ??)", ["first_name"]),
    knex.raw("concat('Description de', ' ',first_name)"),
    "id"
  );
});

// query sql
console.log(insertSelect.toString());

insertSelect
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => {
    knex.destroy();
  });
