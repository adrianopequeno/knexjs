const knexfile = require("../../knexfile");
const knex = require("knex")(knexfile.development);

module.exports = knex;

// knex
//   .select("*")
//   .from("users")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     knex.destroy();
//   });
