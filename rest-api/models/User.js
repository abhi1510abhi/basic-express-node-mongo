const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: { type: String, require: true },
    id: { type: String, require: true },
    doj: Date,
    role: { type: String, default: "ASE" },
    salary: Number
});

module.exports = mongoose.model('transactionsemployee', UserSchema);