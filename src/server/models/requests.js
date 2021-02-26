const {Schema, model} = require("mongoose");


const requires = new Schema({
    type: {type: String, required: true},
    telephone: {type: String, required: true},
    breaking: {type: String, required: true},
    auto: {type: String, required: true},
    date: {type: Date, required: true},
});

module.exports = model("requires", requires);

