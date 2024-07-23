const mongoose = require("mongoose");
const eventschema = mongoose.Schema({
  name: { type: String, require: true },
  imageUrl: { type: String, require: true },
  date: { type: Number, require: true },
  time: { type: Number, require: true },
  description: { type: String, require: true },
  eventType: { type: String, require: true },
  location: { type: String, require: true },
  tickets: [{ type: mongoose.Types.ObjectId, ref: "ticket", require: true }],
  organizer: {
    type: mongoose.Types.ObjectId,
    ref: "orgarnizer",
    require: true,
  },
  isFeatured: { type: Boolean, require: true },
});
const event = mongoose.model("event", eventschema);
module.exports = event;
