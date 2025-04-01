exports.up = function (knex) {
  return knex.schema.createTable("roles", (table) => {
    table.increments("id").primary();
    table.string("name", 150).notNullable().unique();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("roles");
};
