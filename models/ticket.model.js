const mongoose = require("mongoose");
const ticketschema = mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
  quantity: { type: Number, require: true },
});
const ticket = mongoose.model("ticket", ticketschema);
module.exports = ticket;
