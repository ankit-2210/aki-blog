const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    phone: {
        type: Number,
        required: true
    },
    messages: {
        type: String,
        required: true,
        trim: true
    }

})



const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;
