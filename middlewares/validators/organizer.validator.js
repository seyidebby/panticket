const joi = require("joi");

const organizerSchema = joi.object({
  name: joi.string().required(),
  bio: joi.string().required(),
  phoneNumber: joi.number().required(),
  email: joi.string().required(),
  twitter: joi.string().required(),
  facebook: joi.string().required(),
  instagram: joi.string().required(),
});

function validateOrganizer(req, res, next) {
  const { error, value } = organizerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  req.body = value;
  next();
}
const editOrganizerSchema = joi.object({
  name: joi.string(),
  bio: joi.string(),
  phoneNumber: joi.number(),
  email: joi.string(),
  twitter: joi.string(),
  facebook: joi.string(),
  instagram: joi.string(),
});
function validateEditOrganizer(req, res, next) {
  const { error, value } = editOrganizerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  req.body = value;
  next();
}

module.exports = { validateOrganizer, validateEditOrganizer };
