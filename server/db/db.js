const Sequelize = require("sequelize");

const ssl = process.env.DATABASE_URL
  ? {
      ssl: false,
      dialectOptions: {
        ssl: { require: process.env.DATABASE_URL, rejectUnauthorized: false },
        native: true,
      },
    }
  : null;

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false,
    dialect: "postgres",
    protocol: "postgres",
    ssl,
  }
);

module.exports = db;
