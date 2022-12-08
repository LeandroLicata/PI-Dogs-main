const { Router } = require("express");
const dogsRouter = Router();
const { getDogs, getDog, createDog } = require("../controllers/dogsControllers");
const { validateDog } = require("../middlewares/index");

dogsRouter.get("/", getDogs);

dogsRouter.get("/:idBreed", getDog);

dogsRouter.post("/", validateDog, createDog);

module.exports = dogsRouter;