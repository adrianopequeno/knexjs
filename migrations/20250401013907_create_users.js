exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("first_name", 150).notNullable();
    table.string("last_name", 150);
    table.string("email", 255).notNullable().unique();
    table.string("password_hash", 255).notNullable().unique();
    table.decimal("salary", 15, 2).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
