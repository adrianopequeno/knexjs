/**
 * select u.email uemail, u.id uid, u.first_name ufirst_name
 * from users as u;
 */

const knex = require("../config/database");

// const selectData = knex
//   .select("first_name", "last_name", "email")
//   .from("users");
// selectData
//   .then((data) => {
//     // console.log(data); // Todos os dados da tabela users
//     for (const user of data) {
//       console.log(user.first_name); // pega todos os nomes
//     }
//   })
//   .catch((e) => {
//     console.log("ERROR: ", e.message);
//   })
//   .finally(() => {
//     knex.destroy();
//   });

// const selectAllDataUsers = knex("users");
// selectAllDataUsers
//   .then((datas) => {
//     console.log(datas);
//   })
//   .catch((e) => {
//     console.log("ERROR: ", e.message);
//   })
//   .finally(() => {
//     knex.destroy();
//   });

// const select = knex.select().table("users");
// select
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR: ", e.message);
//   })
//   .finally(() => {
//     knex.destroy();
//   });

const selectWithAlias = knex
  .select("email as uemail", "id as uid", "first_name as ufirst_name")
  .from("users");

selectWithAlias
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR: ", e.message);
  })
  .finally(() => {
    knex.destroy();
  });
