const { Router } = require("express");
const dogsRouter = Router();
const { getDogs, getDog, createDog } = require("../controllers/dogsControllers");
const { validateDog } = require("../middlewares/index.js");

dogsRouter.get("/", getDogs);

dogsRouter.get("/:idBreed", getDog);

dogsRouter.post("/", createDog);

module.exports = dogsRouter;