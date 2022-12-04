const { Dog, Temperament } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getDbDogs = async () => {
  const dbDogs = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
    },
  });
  const dbDogsClean = dbDogs.map((dog) => {
    return {
      id: dog.id,
      image: dog.image,
      name: dog.name,
      temperament: dog.Temperament,
      weight: dog.weight,
      height: dog.height,
      life_span: dog.life_span,
      origin: "db",
    };
  });
  return dbDogsClean;
};

const getApiDogs = async () => {
  const apiDogs = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const apiDogsClean = apiDogs.data.map((dog) => {
    const temperament = dog.temperament?.split(", ");
    const weight = dog.weight.metric.split(" - ");
    const height = dog.height.metric.split(" - ");
    return {
      id: dog.id,
      image: dog.image.url,
      name: dog.name,
      temperament,
      weight,
      height,
      life_span: dog.life_span,
      origin: "api",
    };
  });
  return apiDogsClean;
};

const getAllDogs = async () => {
  const dbDogs = await getDbDogs();
  const apiDogs = await getApiDogs();
  return [...dbDogs, ...apiDogs];
};

const findDogs = async (name) => {
  const allDogs = await getAllDogs();
  const filteredDogs = allDogs.filter((dog) =>
    dog.name.toLowerCase().includes(name.toLowerCase())
  );
  return filteredDogs;
};

const findDog = async (idBreed) => {
  const allDogs = await getAllDogs();
  if (!idBreed.includes("-")) idBreed = parseInt(idBreed);
  const dog = allDogs.find((dog) => dog.id === idBreed);
  return dog;
};

module.exports = {
  getAllDogs,
  findDogs,
  findDog,
};
