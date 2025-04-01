const knex = require("../config/database");

knex
  .select("*")
  .from("users")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    knex.destroy();
  });
