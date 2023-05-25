const mongoose = require('mongoose');

const hackSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const Hack = mongoose.model("Hack", hackSchema);

module.exports = { Hack };