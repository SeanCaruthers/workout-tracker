import React from 'react';

function ExerciseInputs({exercise}){

    function toDateInputFormat(date){
        return new Date(date).toISOString().substring(0, 10);
    }
    return (
        <>
            <label htmlFor="name">
                name
                <input type="text" id="name" name="name" required
                       defaultValue={exercise ? exercise.name: ""}
                />
            </label>

            <label htmlFor="reps">
                reps
                <input type="number" id="reps" name="reps" min="1" required
                    defaultValue={exercise ? exercise.reps: 10}
                />
            </label>

            <label htmlFor="weight">
                weight
                 <input type="number" id="weight" name="weight" min="1" required
                     defaultValue={exercise ? exercise.weight: 10}
                 />
            </label>

            <label htmlFor="unit">
                unit
                <select id="unit" required name="unit"
                    defaultValue={exercise ? exercise.unit: "kgs"}
                >
                    <option value="lbs" >lbs</option>
                    <option value="kgs">kgs</option>
                </select>
            </label>

            <label htmlFor="date">
                date
                 <input type="date" id="date" name="date" required pattern="\d{2}-\d{2}-\d{2}"
                     defaultValue={toDateInputFormat(exercise ? exercise.date: new Date())}
                 />
            </label>

        </>
    )
}

export default ExerciseInputs;