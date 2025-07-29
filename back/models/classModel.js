const mongoose = require('mongoose');

const classChema = new mongoose.Schema({
    name: String,
    schedule: String,
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
    tier: { type: mongoose.Schema.Types.ObjectId, ref: 'Tier' },
    description: String,
    active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Class', classChema);