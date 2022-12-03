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
    const temperament = dog.temperament.split(", ");
    const weigth = dog.weight.metric.split(" - ");
    return {
      id: dog.id,
      image: dog.image.url,
      name: dog.name,
      temperament,
      weigth,
      origin: "api",
    };
  });
  return apiDogsClean;
};

const getAllDogs = async () => {
  const dbDogs = getDbDogs();
  const apiDogs = getApiDogs();
  return [...dbDogs, ...apiDogs];
};

module.exports = {
  getAllDogs,
};
