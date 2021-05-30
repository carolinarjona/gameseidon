const { DataTypes } = require("sequelize");
const dbGameseidon = require("../config/dbGameseidon");

const Videogame = dbGameseidon.define("Videogame", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  title: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL(5, 2).UNSIGNED,
  },
  console: {
    type: DataTypes.TEXT,
  },
  genre: {
    type: DataTypes.TEXT,
  },
});

module.exports = Videogame;
