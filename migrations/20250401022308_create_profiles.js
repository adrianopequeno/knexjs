exports.up = function (knex) {
  return knex.schema.createTable("profiles", (table) => {
    table.increments("id").primary();
    table.text("bio");
    table.text("description");
    table.integer("user_id").unsigned().notNullable().unique();
    table
      .foreign("user_id")
      .references("id") // Referencia a coluna correta da tabela "users"
      .inTable("users") // Nome da tabela referenciada
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("profiles");
};
