const { Router } = require("express");
const temperamentsRouter = Router();
const { getTemperaments } = require("../controllers/temperamentsControllers");

temperamentsRouter.get("/", getTemperaments);

module.exports = temperamentsRouter;