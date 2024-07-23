const mongoose = require("mongoose");
const event = require("../models/event.model.js");

async function newevent(req, res) {
  const alreadyAnEvent = await event.findOne({ name: req.body.name });
  if (alreadyAnEvent) {
    return res
      .status(400)
      .json({ message: "event already exist. update or delete instead" });
  }
  const eventcreate = await event.create(req.body);
  await eventcreate.save();
  return res
    .status(201)
    .json({ message: "event created successfully", evnt: eventcreate });
}
async function getEvent(req, res) {
  const eventGet = await event.findById(req.params.id);
  res.status(200).json({ message: "event gotten by id", idGet: eventGet });
}
async function getAllEvent(req, res) {
  const allEvent = await event.find({});
  res.status(200).json({ message: "all event gotten ", all: allEvent });
}
async function editEvent(req, res) {
  const edit = await event.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
  });
  res.status(200).json({ message: "event edited", ticketEdit: edit });
}
async function deleteEvent(req, res) {
  await event.findByIdAndDelete(req.params.id);
  res.status(207).json({ message: "event deleted successfully" });
}

module.exports = { newevent, getEvent, getAllEvent, editEvent, deleteEvent };
