/**
 * INSERT INTO users (first_name, last_name, email, password_hash) 
    VALUES 
    ('Maria', 'Oliveira', 'maria@hotmail.com', 'maria_hash'),
    ('Pedro', 'Francisco', 'pedro@hotmail.com', 'pedro_hash'),
    ('João', 'Pereira', 'joao@empresa.com', 'joao_senha');
 */
const knex = require("../config/database");

const data = [
  {
    first_name: "Ciclano",
    last_name: "Oliveira",
    email: "ciclano@hotmail.com",
    password_hash: "ciclano_hash",
    salary: 4023.12,
  },
  {
    first_name: "Beltrano",
    last_name: "Francisco",
    email: "beltrano@hotmail.com",
    password_hash: "beltrano_hash",
    salary: 3521.12,
  },
  // {
  //   first_name: "João",
  //   last_name: "Pereira",
  //   email: "joao@empresa.com",
  //   password_hash: "joao_senha",
  //   salary: 1000.12,
  // },
];

const insert = knex("users").insert(data);
// console.log(insert.toString());
// console.log(insert.toSQL().toNative());

insert
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => {
    knex.destroy();
  });

// knex.insert({
//     first_name: 'Maria',
//     last_name: 'Oliveira',
//     email: 'XXXXXXXXXXXXXXXXX',
//     password_hash: 'maria_hash'
// }).into('users').then(data => {
//     console.log(data);
// }).catch(e => {
//     console.log(e.message);
// }).finally(() => {
//     knex.destroy();
// });

// knex("users")
//   .insert(data)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e.message);
//   })
//   .finally(() => {
//     knex.destroy();
//   });
