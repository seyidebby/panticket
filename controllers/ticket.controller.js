const mongoose = require("mongoose");
const ticket = require("../models/ticket.model.js");

async function newTicket(req, res) {
  const createTicket = await ticket.create(req.body);
  await createTicket.save();
  return res
    .status(201)
    .json({ message: "ticket created successfully", ticket: createTicket });
}
async function getTicket(req, res) {
  const tickets = await ticket.findById(req.params.id);
  res.status(200).json({ message: "ticket gotten by id", ticket: tickets });
}
async function getAllTicket(req, res) {
  const allTicket = await ticket.find({});
  res.status(200).json({ message: "all ticket gotten ", allTicket: allTicket });
}
async function editTicket(req, res) {
  const edit = await ticket.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
  });
  res.status(200).json({ message: "ticket edited", ticketEdit: edit });
}
async function deleteTicket(req, res) {
  await ticket.findByIdAndDelete(req.params.id);
  res.status(207).json({ message: "ticket deleted successfully" });
}

module.exports = {
  newTicket,
  getTicket,
  getAllTicket,
  editTicket,
  deleteTicket,
};
