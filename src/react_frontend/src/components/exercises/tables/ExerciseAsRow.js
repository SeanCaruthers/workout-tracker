import React from 'react';

import { MdDelete, MdEdit} from 'react-icons/md';
import { Link } from 'react-router-dom';

import rest from "../../../config/rest.js"
import state from "../../../config/stateManager.js";

function Exercise({exercise, update_route}){

    const delete_endpoint = `${rest.exercises.endpoint}/${exercise._id}`;
    const current_exercise = state.getState().current_exercise;
    const exercises = state.getState().exercises;
    
    console.log(exercise);

    const updateCurrentExercise = () => current_exercise.mutation(exercise);

    async function deleteSelectedExercise(){
        const response = await fetch(delete_endpoint, { method: "DELETE", });

        if(response.status !== 204){ return; }

        exercises.mutation(
            exercises.variable.filter(
                instance => instance._id !== exercise._id
            )
        )
        alert("Your entry has been deleted");
    }

    return(
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td> 
            <td>
                <Link to={update_route.path}>
                    <MdEdit title={"Edit this exercise"} 
                            className="noBorder icon" 
                            onClick={updateCurrentExercise}>     
                    </MdEdit>
                </Link>
            </td>
            <td>
                <MdDelete title={"Delete this exercise"}
                          className="noBorder icon" 
                          onClick={deleteSelectedExercise}/>
            </td>
        </tr>
    );

}


export default Exercise;