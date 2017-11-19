const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  plot: String,
  director: String,
  year: Number,
  posterUrl: String,
  title: String,
});

module.exports = mongoose.model("Movie", MovieSchema);