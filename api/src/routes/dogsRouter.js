const { Router } = require("express");
const dogsRouter = Router();
const { getDogs, getDog } = require("../controllers/dogsControllers");

dogsRouter.get("/", getDogs);

dogsRouter.get("/:idBreed", getDog)

module.exports = dogsRouter;