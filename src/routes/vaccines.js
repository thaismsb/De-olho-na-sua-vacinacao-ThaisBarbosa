const express = require("express");
const router = express.Router();
const controller = require("../controllers/vaccineController");

//Cadastrar uma nova vacina
router.post("/", controller.createVaccine);
//Retornar todas as vacinas
router.get("/", controller.getAllVaccines);
//Retornar uma vacina específica
router.get("/:id", controller.getVaccine);
//Marcar se tomou vacina
router.patch("/:id/vaccinated", controller.updateVaccineStatus);

module.exports = router;