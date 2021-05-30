const Videogame = require("../models/Videogame");

exports.findAllVideogames = async () => {
  return await Videogame.findAll({ order: [["createdAt", "DESC"]] });
};

exports.findVideogameById = async (id) => {
  return await Videogame.findByPk(id);
};

exports.insertVideogame = async (videogame) => {
  return await Videogame.create(videogame);
};

exports.updateVideogame = async (id, videogameData) => {
  return await Videogame.update(videogameData, { where: { id } });
};

exports.deleteVideogame = async (id) => {
  return await Videogame.destroy({ where: { id } });
};
