const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: String,
    schedule: {
        dayOfWeek: {
            type: Number,
            enum: [1, 2, 3, 4, 5, 6, 7], // 1:Lunes - 7:Domingo
            required: true
        },
        startTime: { type: String, required: true }, 
        endTime: { type: String, required: true } 
    },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
    tier: { type: mongoose.Schema.Types.ObjectId, ref: 'Tier' },
    description: String,
    active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Class', classSchema);