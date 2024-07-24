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
    console.log(error);
  }
}
async function getTicket(req, res) {
  try {
    const tickets = await ticket.findById(req.params.id);
    res.status(200).json({ message: "ticket gotten by id", ticket: tickets });
  } catch (error) {
    console.log(error);
  }
}
async function getAllTicket(req, res) {
  try {
    const allTicket = await ticket.find({});
    res
      .status(200)
      .json({ message: "all ticket gotten ", allTicket: allTicket });
  } catch (error) {
    console.log(error);
  }
}
async function editTicket(req, res) {
  try {
    const edit = await ticket.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    res.status(200).json({ message: "ticket edited", ticketEdit: edit });
  } catch (error) {
    console.log(error);
  }
}
async function deleteTicket(req, res) {
  try {
    await ticket.findByIdAndDelete(req.params.id);
    res.status(207).json({ message: "ticket deleted successfully" });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  newTicket,
  getTicket,
  getAllTicket,
  editTicket,
  deleteTicket,
};
