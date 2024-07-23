const mongoose = require("mongoose");
const organizerschema = mongoose.Schema({
  name: { type: String, require: true },
  bio: { type: String, require: true },
  phoneNumer: { type: Number, require: true },
  email: { type: String, require: true },
  twitter: { type: String, require: true },
  facebook: { type: String, require: true },
  instagram: { type: String, require: true },
});

const organizer = mongoose.model("organizer", organizerschema);
module.exports = organizer;
