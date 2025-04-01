module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "databaseknex",
      user: "admin",
      password: "admin",
      host: "localhost", // ou o nome do serviço no Docker Compose
      port: 5432, // ou a porta correta do seu PostgreSQL
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  },
  staging: {
    client: "pg",
    connection: {
      database: "databaseknex",
      user: "admin",
      password: "admin",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  },
};
