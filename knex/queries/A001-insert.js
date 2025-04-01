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
    first_name: "Maria",
    last_name: "Oliveira",
    email: "maria@hotmail.com",
    password_hash: "maria_hash",
    salary: 123.12,
  },
  {
    first_name: "Pedro",
    last_name: "Francisco",
    email: "pedro@hotmail.com",
    password_hash: "pedro_hash",
    salary: 321.12,
  },
  {
    first_name: "João",
    last_name: "Pereira",
    email: "joao@empresa.com",
    password_hash: "joao_senha",
    salary: 1000.12,
  },
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
