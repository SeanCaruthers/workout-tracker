import { React, useState } from 'react';
import ExerciseInputs from './ExerciseInputs.js';
import Form from "../../shared/Form.js";
import rest from "../../../config/rest.js";
import state from "../../../config/stateManager.js"
import { Redirect } from "react-router-dom";

function UpdateExerciseForm(props){

    const [finished, setFinished] = useState(false);

    const method = "PUT";
    const action = "/exercises";
    const legend = "Update Entry";

    const current_exercise = state.getState().current_exercise;
    const exercises = state.getState().exercises;

    const updateEntry = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target.form).entries()

        let body = JSON.stringify(Object.fromEntries(formData));
        
        const id = current_exercise.variable._id;
    
        fetch(`${rest.exercises.endpoint}/${id}`, {
                method: method,
                headers: {
                     "content-type": "application/json",
                },
                body: body,
                
        })
        .then(response => response.json())
        .then(updated_entry=> {

            exercises.mutation(
                exercises.variable.map(exercises => 
                    (exercises._id === id) ? updated_entry: exercises
                )
            )
            alert("Your entry was successfully updated!");
            setFinished(true)
        })
    };

    if(finished){ return <Redirect to="/" />}

    return(
            <Form
                method={method} 
                action={action}
                legend={legend} 
                callback={updateEntry}>     
                <ExerciseInputs exercise={current_exercise.variable} ></ExerciseInputs>   
            </Form>
    )
}

export default UpdateExerciseForm;