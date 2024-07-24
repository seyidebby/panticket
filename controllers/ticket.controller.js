const mongoose = require("mongoose");
const ticket = require("../models/ticket.model.js");

async function newTicket(req, res) {
  try {
    const createTicket = await ticket.create(req.body);
    await createTicket.save();
    return res
      .status(201)
      .json({ message: "ticket created successfully", ticket: createTicket });
  } catch (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
}
async function getTicket(req, res) {
  try {
    const tickets = await ticket.findById(req.params.id);
    res.status(200).json({ message: "ticket gotten by id", ticket: tickets });
  } catch (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
}
async function getAllTicket(req, res) {
  try {
    const allTicket = await ticket.find({});
    res
      .status(200)
      .json({ message: "all ticket gotten ", allTicket: allTicket });
  } catch (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
}
async function editTicket(req, res) {
  try {
    const edit = await ticket.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    res.status(200).json({ message: "ticket edited", ticketEdit: edit });
  } catch (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
}
async function deleteTicket(req, res) {
  try {
    await ticket.findByIdAndDelete(req.params.id);
    res.status(207).json({ message: "ticket deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
}

module.exports = {
  newTicket,
  getTicket,
  getAllTicket,
  editTicket,
  deleteTicket,
};
