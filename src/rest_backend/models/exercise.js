async function buildexercise(resolve, reject){
    let mongoose, exerciseSchema, exercise;

    try{
        mongoose = await require("../database/mongo_connect");
        exerciseSchema = require("../schemas/exercise");
        exercise = mongoose.model("exercise", exerciseSchema);
    }
    catch(err){
        console.log(err, err.stack);
        reject(err);
    }

    exercise.create = async function(name, reps, weight, unit, date){

        const new_exercise = new exercise({
            name: name, 
            reps: reps,
            weight: weight,
            unit: unit,
            date: date,
        });

        let new_entry = await new_exercise.save();

        return new_entry;
    }

    exercise.retrieve = async function(filters=[], projection=false, limit=false){
        const query = exercise.find();

        if(Array.isArray(filters)){
            filters.forEach(filter => query.and(filter));
        }
        else{ query.and(filters); }

        if( projection ){ query.select(projection); }
        if( limit      ){ query.limit(limit); }

        let query_results = await query.exec();

        return query_results;
    }

    // we need to set new to true to receive the updated entry
    // also we need to update connection variables to use findOneAndUpdate method
    exercise.patch = async function(identifier, updates){
        
        let updated = await exercise.findOneAndUpdate(
            {_id: identifier}, 
            updates,
            { new: true }
            );
        return updated;
    }

    exercise.deleteById = async function(identifier){
        const query_results = await exercise.deleteOne({"_id": identifier});
        return query_results;
    }

    resolve(exercise);
}

module.exports = new Promise(buildexercise);