const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ticket = require("./models/ticket.model.js");
const {
  newTicket,
  getTicket,
  getAllTicket,
  editTicket,
  deleteTicket,
} = require("./controllers/ticket.controller");
const organizer = require("./models/organizer.model.js");
const {
  newOrganizer,
  getOrganizer,
  getAllOrganizers,
  editOrganizer,
  deleteOrganizer,
} = require("./controllers/organizer.controller.js");
const event = require("./models/event.model.js");
const {
  newevent,
  getEvent,
  getAllEvent,
  editEvent,
  deleteEvent,
} = require("./controllers/event.controller.js");
const {
  validateTicket,
  validateEditTicket,
} = require("./middlewares/validators/ticket.validator.js");
const {
  validateOrganizer,
  validateEditOrganizer,
} = require("./middlewares/validators/organizer.validator.js");
const {
  validateEvent,
  validateEditEvent,
} = require("./middlewares/validators/event.validator.js");

const server = express();
server.use(express.json());
dotenv.config();
port = process.env.PORT;
// ticket
server.post("/ticket", validateTicket, newTicket);
server.get("/ticket/:id", getTicket);
server.get("/ticket", getAllTicket);
server.patch("/ticket/:id", validateEditTicket, editTicket);
server.delete("/ticket/:id", deleteTicket);

// organizer
server.post("/organizer", validateOrganizer, newOrganizer);
server.get("/organizer/:id", getOrganizer);
server.get("/organizer", getAllOrganizers);
server.patch("/organizer/:id", validateEditOrganizer, editOrganizer);
server.delete("/organizer/:id", deleteOrganizer);
// event
server.post("/event", validateEvent, newevent);
server.get("/event/:id", getEvent);
server.get("/event", getAllEvent);
server.patch("/event/:id", validateEditEvent, editEvent);
server.delete("/event/:id", deleteEvent);

server.listen(port, () => {
  console.log("Panticket server started ");
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("panticket database connection established");
    })
    .catch(() => {
      throw new Error(err.message);
    });
});
