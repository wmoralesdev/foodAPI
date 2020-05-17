const mongoose = require('mongoose'), Schema = mongoose.Schema

var ListElementSchema = mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    quantity: String
}, {timestamps: false})

var ListSchema = mongoose.Schema({
    name: String,
    desc: String,
    listType: {
        enum: ['Supermercado', 'Salud', 'Conveniencia', 'Entretenimiento', 'Electrónicos']
    },
    elements: [ListElementSchema]
}, {timestamps: false})

var UserSchema = Schema({
    googleID: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: [true, 'Empty string for fullname'],
    },
    password: {
        type: String,
        match: '(?=.*[A-Z])',
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    photoUri: String,
    lists: [ListSchema]
}, {timestamps: false})

module.exports = mongoose.model("User", UserSchema)