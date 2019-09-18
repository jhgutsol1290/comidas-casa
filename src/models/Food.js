const {model, Schema} = require('mongoose')

const foodSchema = new Schema({
    day: {type: String},
    breakfast: {type: String},
    dinner: {type: String},
    done: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now()}
})

module.exports = model('Food', foodSchema)