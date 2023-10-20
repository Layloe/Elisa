
const mongoose = require('mongoose');
const ticketListSchema = new mongoose.Schema({

timeOfDay: {
    type: String,
    required: true
},
bloodPressure:{
    type: String,
    required: true
},

severity: {
    type: String,
    required: true
},
assignedTo: {
    type: String,
    required: true
},

status: {
    type: String,
    enum: ["Medication Taken", "Medication Not Taken"], //enum
    default: "Medication Not Taken"
},
date: {
    type: Date,
    default: Date.now
}
})
module.exports = mongoose.model('Elisa', ticketListSchema, 'formdatas');
