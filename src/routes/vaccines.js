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
//Deletar uma vacina 
router.delete("/:id", controller.deleteVaccine);
//Deletar todas as vacinas
router.delete("/", controller.deleteAllVaccines);
//Editar informações da vacina
router.put("/:id", controller.updateVaccine);



module.exports = router;