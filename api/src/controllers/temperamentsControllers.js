const { Temperament } = require("../db");
const axios = require("axios");

const getTemperaments = async (req, res) => {
    const response = await axios.get("https://api.thedogapi.com/v1/breeds");
    const temperaments = response.data.map((dog) => {
        if(!dog.temperament) return dog.temperament = null;
        return dog.temperament.split(", ");
    })
    const temperamentsClean = temperaments.flat().filter(Boolean);
    const temperamentsUnique = new Set(temperamentsClean);
    temperamentsUnique.forEach(async (dog) => await Temperament.findOrCreate({
        where: {
            name: dog
        }
    }))
    const allTemperaments = await Temperament.findAll();
    res.status(200).json(allTemperaments);
}

module.exports = { getTemperaments };