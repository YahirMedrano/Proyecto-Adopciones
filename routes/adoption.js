const express = require("express");
const router = express.Router();
const adoptionsController = require('../controllers/adoptionsController');
const adoptionValidator = require("../validations/adoptionValidator");
const jwtToken = require("../validations/jwtValidation");

router.get('/adoption', jwtToken.validateToken, adoptionValidator.id, adoptionsController.getAdoption);
router.get('/adoptions', jwtToken.validateToken, adoptionsController.getAdoptions);
router.post('/adoption', jwtToken.validateToken, adoptionValidator.add, adoptionsController.postAdoption);
router.put('/adoption', jwtToken.validateToken, adoptionValidator.update, adoptionsController.putAdoption);
router.delete('/adoption', jwtToken.validateToken, adoptionValidator.id, adoptionsController.deleteAdoption);
router.get('/adoptionUser', jwtToken.validateToken, adoptionValidator.userid, adoptionsController.getAdoptionByUser);

module.exports = router;