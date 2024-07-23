const joi = require("joi");

const eventSchema = joi.object({
  name: joi.string().required(),
  imageUrl: joi.string().required(),
  date: joi.number().required(),
  time: joi.number().required(),
  description: joi.string().required(),
  eventType: joi.string().required(),
  location: joi.string().required(),
  isFeatured: joi.boolean().required(),
});

function validateEvent(req, res, next) {
  const { error, value } = eventSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  req.body = value;
  next();
}
const editEventSchema = joi.object({
  name: joi.string(),
  imageUrl: joi.string(),
  date: joi.number(),
  time: joi.number(),
  description: joi.string(),
  eventType: joi.string(),
  location: joi.string(),
  isFeatured: joi.boolean(),
});

function validateEditEvent(req, res, next) {
  const { error, value } = editEventSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  req.body = value;
  next();
}

module.exports = { validateEvent, validateEditEvent };
