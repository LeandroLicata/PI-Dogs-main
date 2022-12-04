const { Dog } = require("../db");
const { getAllDogs, findDogs, findDog } = require("../utils/index");

const getDogs = async (req, res) => {
  const { name } = req.query;
  let results = name ? await findDogs(name) : await getAllDogs();
  results.length
    ? res.status(200).json(results)
    : res.status(404).send("Breed not found :(");
};

const getDog = async (req, res) => {
    const { idBreed } = req.params;
    let result = await findDog(idBreed);
    res.status(200).json(result);
}

module.exports = {
  getDogs,
  getDog
};
