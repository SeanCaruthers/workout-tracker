import { React, useState, useEffect} from 'react';

import Table from "../../shared/Table.js";
import ExerciseAsRow from "./ExerciseAsRow";

import rest from "../../../config/rest.js";
import state from '../../../config/stateManager.js';

// following the React hooks example at react.js/docs/faq-ajax.html
function ExerciseTable(props){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const retreive_url = rest.exercises.endpoint;

    const caption = "Current Exercises";
    const headers = ["name", "reps", "weight", "unit", "date", "edit", "delete"];

    const exercises = state.getState().exercises;

    useEffect(() => {

        async function loadExercises(endpoint_url){
            
            if(exercises.variable.length){
                setIsLoaded(true);
                return
            }
            try{
                const response = await fetch(endpoint_url);
                let results = await response.json();
                
                exercises.mutation(results);
            } 
            catch(error){
                setError(error)
            }
            setIsLoaded(true);
        }

        loadExercises(retreive_url);

    }, [retreive_url, exercises]);

    if(!isLoaded){
        return <div id="loading"></div>
    }

    if(error){
        return <div id="error"></div>
    }
    if(!exercises.variable.length){
        return <div id="no-content">No workouts saved yet!</div>
    }

    return (
        <Table caption={caption} headers={headers}>
            {exercises.variable.map((instance, i) => 
                <ExerciseAsRow
                    key={i} 
                    update_route={props.update_route}
                    exercise={instance}
                />
            )}
        </Table>
    )
}

export default ExerciseTable;