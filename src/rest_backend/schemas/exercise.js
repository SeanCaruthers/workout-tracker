/* 
    for further information on defining schema's see:
    https://mongoosejs.com/docs/guide.html#definition

    for information on defining arrays in schema's:
    https://mongoosejs.com/docs/schematypes.html#arrays

*/
const { Schema } = require("mongoose");

const ExerciseSchema = new Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: String, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true },
});

module.exports = ExerciseSchema;