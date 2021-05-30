const { Sequelize } = require("sequelize");

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const dbGameseidon = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

dbGameseidon.sync().then(() => console.log("Everything is ok ✌!"));

module.exports = dbGameseidon;
