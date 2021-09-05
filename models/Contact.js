const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users', // todo how does it know it refers to our user model?
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {type: String},
    type: {
        type: String,
        default: 'personal'
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('contact', ContactSchema)