var express = require("express");
var router = express.Router();
const videogameService = require("../services/videogameService");

router.get("/all", async (req, res) => {
  try {
    const videogame = await videogameService.getAllVideogames();
    res.status(200).json(videogame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    await videogameService.createVideogame(req.body);
    res.sendStatus(201);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await videogameService.deleteVideogame(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
