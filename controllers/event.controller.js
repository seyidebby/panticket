const mongoose = require("mongoose");
const event = require("../models/event.model.js");

async function newevent(req, res) {
  try {
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
  } catch (error) {
    console.log(error);
    //   return res.status(400).json({ message: error.details[0].message });
  }
}
async function getEvent(req, res) {
  try {
    const eventGet = await event.findById(req.params.id).populate([
      { path: "tickets", model: "ticket" },
      { path: "organizer", model: "organizer" },
    ]);
    res.status(200).json({ message: "event gotten by id", idGet: eventGet });
  } catch (error) {
    console.log(error);
    // return res.status(400).json({ message: error.details[0].message });
  }
}
async function getAllEvent(req, res) {
  try {
    const allEvent = await event.find({});
    res.status(200).json({ message: "all event gotten ", all: allEvent });
  } catch (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
}
async function editEvent(req, res) {
  try {
    const edit = await event.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    res.status(200).json({ message: "event edited", ticketEdit: edit });
  } catch (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
}
async function deleteEvent(req, res) {
  try {
    await event.findByIdAndDelete(req.params.id);
    res.status(207).json({ message: "event deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
}

module.exports = { newevent, getEvent, getAllEvent, editEvent, deleteEvent };
