const joi = require("joi");

const ticketSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  quantity: joi.number().required(),
});
function validateTicket(req, res, next) {
  const { error, value } = ticketSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  req.body = value;
  next();
}
const editTicketSchema = joi.object({
  name: joi.string(),
  price: joi.number(),
  quantity: joi.number(),
});

function validateEditTicket(req, res, next) {
  const { error, value } = editTicketSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  req.body = value;
  next();
}
module.exports = { validateTicket, validateEditTicket };
