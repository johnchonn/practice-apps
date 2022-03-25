const mongoose = require('mongoose');

// literally a model. Creating templates

const wordsGlossary = new mongoose.Schema({
    word: String,
    definition: String
  });

const db = mongoose.model('db', wordsGlossary);

module.exports = db;

// const attendeeSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true },
//   shirt: { type: String, required: true },
//   skillLevel: { type: String, required: true }
// }, {
//   timestamps: true,
// });