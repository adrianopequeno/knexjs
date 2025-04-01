exports.up = function (knex) {
  return knex.schema.createTable("users_roles", (table) => {
    table.integer("user_id").unsigned();
    table.integer("role_id").unsigned();

    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .foreign("role_id")
      .references("id")
      .inTable("roles")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.primary(["user_id", "role_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users_roles");
};
