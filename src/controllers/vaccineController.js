const Vaccine = require("../models/Vaccine");

const createVaccine = async (req, res) => {
    const { name, expected_date, vaccinated } = req.body
    try {
        const vaccine = await Vaccine.create({ name, expected_date, vaccinated  });
        res.status(201).send(vaccine)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getAllVaccines = async (req, res) => {
    try {
        const vaccines = await Vaccine.findAll()
        if (vaccines && vaccines.length > 0) {
            res.status(200).send(vaccines)
        } else {
            res.status(204).send({message: "Nenhuma vacina foi cadastrada."})
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getVaccine = async (req, res) => {
    const vaccineId = req.params.id
    try {
        const vaccine = await Vaccine.findOne({
            where: { id: vaccineId }
        });
        if (vaccine) {
            res.status(200).send(vaccine)
        } else {
            res.status(404).send({ message: `Nenhuma vacina com o id ${vaccineId} foi encontrada.`})
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const updateVaccineStatus= async (req, res) => {
    const vaccineId = req.params.id;
    const vaccinated = req.body.vaccinated;
    try {
        const rowsUpdated = await Vaccine.update({ vaccinated }, { where: { id: vaccineId } });
        if (rowsUpdated && rowsUpdated > 0) {
            res.status(200).send({ message: `Status da vacina de id ${vaccineId} atualizado com sucesso!`})
        } else {
            res.status(404).send({ message: `Vacina com id ${vaccineId} não foi encontrada.` })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const deleteVaccine = async (req, res) => {
    const vaccineId = req.params.id
    try {
        const rowsDeleted = await Vaccine.destroy({ where: { id: vaccineId} });
        if (rowsDeleted) {
            res.status(200).send({ message: `Vacina de id ${vaccineId} deletada com sucesso!` })
        } else {
            res.status(404).send({ message: `Vacina com id ${vaccineId} não foi encontrada.` })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const deleteAllVaccines = async (req, res) => {
   
    try {
        const rowsDeleted = await Vaccine.destroy( {where: {Vaccine}, truncate: true});
            res.status(200).send({ message: `Todas as vacinas foram deletadas com sucesso!` })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


module.exports = {
    createVaccine,
    getAllVaccines,
    getVaccine,
    updateVaccineStatus,
    deleteVaccine,
    deleteAllVaccines
}