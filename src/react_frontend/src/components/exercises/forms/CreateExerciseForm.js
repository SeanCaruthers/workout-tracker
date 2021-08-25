import { React, useState} from 'react';
import ExerciseInputs from './ExerciseInputs.js';
import Form from "../../shared/Form.js";

import rest from "../../../config/rest.js";
import state from "../../../config/stateManager.js"

import { Redirect } from "react-router-dom";

function CreateExerciseForm(props){

    const [finished, setFinished] = useState(false);

    const method = "POST";
    const action = "/exercises";
    const legend = "Add Entry";
    
    const exercises = state.getState().exercises;
    

    function formatDate(date){
        return new Date(date).toLocaleString(undefined, {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
        }).split("/").join("-");
    }

    const createEntry = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target.form).entries()
        let body = Object.fromEntries(formData);

        body.date = formatDate(body.date);

        fetch(`${rest.exercises.endpoint}`, {
                method: method,
                headers: {
                     "content-type": "application/json",
                },
                body: JSON.stringify(body),
                
        })
        .then(response => response.json())
        .then(created_entry => {
            alert("Your entry was successfully created!");

            exercises.mutation([created_entry, ...exercises.variable])

            setFinished(true)
        })
        .catch((error) => {
            console.log(error);
        });
       
    };

    if(finished){ return <Redirect to="/" />}
    return(
        <Form
            method={method} 
            action={action}
            legend={legend} 
            callback={createEntry}>     
            <ExerciseInputs></ExerciseInputs>   
        </Form>
    )
}

export default CreateExerciseForm;