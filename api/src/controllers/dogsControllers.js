const { Dog, Temperament } = require("../db");
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
};

const createDog = async (req, res) => {
  try {
    const {
      name,
      min_height,
      max_height,
      min_weight,
      max_weight,
      min_life_span,
      max_life_span,
      image,
      temperament,
    } = req.body;

    const height = [];
    height.push(min_height, max_height);
    const weight = [];
    weight.push(min_weight, max_weight);
    const life_span = `${min_life_span} - ${max_life_span} years`;
    
    const newDog = await Dog.create({ name, height, weight, life_span, image });

    let temperaments = await Temperament.findAll({
      where: { name: temperament },
    });
    console.log(temperaments)
    await newDog.addTemperament(temperaments);
    res.status(200).send("Breed added successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDogs,
  getDog,
  createDog,
};
