const { check, validationResult } = require("express-validator");

const generateAdoptionValidators = () => [
  check("user_id").notEmpty().isNumeric().withMessage("Invalid user id"),
  check("pet_id").notEmpty().isNumeric().withMessage("Invalid pet id"),
  check("date").notEmpty().isDate().withMessage("Invalid date"),
];

const idAdoptionValidators = () => [
  check("id").notEmpty().isNumeric().withMessage("Invalid id"),
];

const useridAdoptionValidators = () => [
    check("user_id").notEmpty().isNumeric().withMessage("Invalid user id"),
  ];

const updateAdoptionValidators = () => [
  check("id").notEmpty().isNumeric().withMessage("Invalid id"),
  check("user_id").isNumeric().withMessage("Invalid user id"),
  check("pet_id").isNumeric().withMessage("Invalid pet id"),
  check("date").optional().isDate().withMessage("Invalid date"),
];

const reporter = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({
      succes: false,
      code: 404,
      message: errors,
      data: []
    });
  }
  next();
};

module.exports = {
  add: [generateAdoptionValidators(), reporter],
  id: [idAdoptionValidators(), reporter],
  update: [updateAdoptionValidators(), reporter],
  userid: [useridAdoptionValidators(), reporter]
};