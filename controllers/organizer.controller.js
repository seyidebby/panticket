const mongoose = require("mongoose");
const organizer = require("../models/organizer.model.js");

async function newOrganizer(req, res) {
  try {
    const createOrganizer = await organizer.create(req.body);
    await createOrganizer.save();
    return res.status(201).json({
      message: "organizer created successfully",
      organize: createOrganizer,
    });
  } catch (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
}
async function getOrganizer(req, res) {
  try {
    const getById = await organizer.findById(req.params.id);
    res.status(200).json({
      message: "gotten organizer successfully",
      getorganizer: getById,
    });
  } catch (error) {
    console.log(error);
    //   return res.status(400).json({ message: error.details[0].message });
  }
}

async function getAllOrganizers(req, res) {
  try {
    const allOrganizers = await organizer.find({});
    res
      .status(200)
      .json({ message: "all organizers goteen", getorganizer: allOrganizers });
  } catch (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
}
async function editOrganizer(req, res) {
  try {
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
  } catch (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
}
async function deleteOrganizer(req, res) {
  try {
    await organizer.findByIdAndDelete(req.params.id);
    res.status(207).json({ message: "organizer deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
}

module.exports = {
  newOrganizer,
  getOrganizer,
  getAllOrganizers,
  editOrganizer,
  deleteOrganizer,
};
