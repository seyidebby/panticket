const mongoose = require("mongoose");
const organizer = require("../models/organizer.model.js");

async function newOrganizer(req, res) {
  const organize = await organizer.create(req.body);
  await organize.save();
  return res.status(201).json({
    message: "organizer created successfully",
    organize: organize,
  });
}
async function getOrganizer(req, res) {
  const getById = await organizer.find(req.params.id);
  res
    .status(200)
    .json({ message: "gotten organizer successfully", getorganizer: getById });
}

async function getAllOrganizers(req, res) {
  const allOrganizer = await organizer.find({});
  res
    .status(200)
    .json({ message: "all organizers goteen", getorganizer: allOrganizer });
}
async function editOrganizer(req, res) {
  const editOrganizer = await organizer.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      returnDocument: "after",
    }
  );
  res
    .status(200)
    .json({ message: "organizer edited", organizerEdit: editOrganizer });
}
async function deleteOrganizer(req, res) {
  await organizer.findByIdAndDelete(req.params.id);
  res.status(207).json({ message: "organizer deleted successfully" });
}

module.exports = {
  newOrganizer,
  getOrganizer,
  getAllOrganizers,
  editOrganizer,
  deleteOrganizer,
};
