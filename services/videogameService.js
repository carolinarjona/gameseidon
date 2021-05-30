const videogameRepository = require("../repositories/videogameRepository");

exports.getAllVideogames = async () => {
  const videogames = await videogameRepository.findAllVideogames();
  return videogames;
};

exports.getVideogame = async (id) => {
  const videogame = await videogameRepository.findVideogameById(id);
  return videogame.toJSON();
};

exports.createVideogame = async (videogame) => {
  await videogameRepository.insertVideogame(videogame);
};

exports.editVideogame = async (id, videogameData) => {
  const videogame = await videogameRepository.findAllVideogames(
    id,
    videogameData
  );
  await videogameRepository.updateVideogame(videogame);
};

exports.deleteVideogame = async (id) => {
  await videogameRepository.deleteVideogame(id);
};
