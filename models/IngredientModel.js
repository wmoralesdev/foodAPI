const mongoose = require('mongoose'), Schema = mongoose.Schema

var IngredientSchema = mongoose.Schema({
    ingredient: {
        type: String,
        required: true
    },
    meassure: String
}, {timestamps: false})

module.exports = mongoose.model("Ingredient", IngredientSchema)