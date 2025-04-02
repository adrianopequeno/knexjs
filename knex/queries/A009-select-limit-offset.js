/**
 * select "id", "first_name", "email"
 * from "users"
 * order by "first_name" desc
 * limit 10;
 *
 * Na prática, isso é usado para paginação:
 * Se cada página exibe 10 registros, essa consulta pegaria a
 * quarta página (considerando um índice baseado em 0).
 */

const knex = require("../config/database");

const selectLimit = knex("users")
  .select("id", "first_name", "email") // Seleciona apenas as colunas "id", "first_name" e "email"
  .orderBy("id", "asc") // Ordena por "first_name" em ordem decrescente (Z → A)
  .limit(10, { skipBinding: true }) // Define um limite de 10 registros (com `skipBinding: true`)
  .offset(10); // Pula os primeiros 10 registros

// query sql
console.log(selectLimit.toString());

selectLimit
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => {
    knex.destroy();
  });
