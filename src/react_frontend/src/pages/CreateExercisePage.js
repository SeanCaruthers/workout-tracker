import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Page from '../components/shared/Page.js'

import CreateExerciseForm from '../components/exercises/forms/CreateExerciseForm.js';

function CreateExercisePage(props){

    return(
    <Page title={"Create new Entry"}>

        <header>
            <nav>
                <Link to="/">
                    <MdArrowBack className="icon" title={"return"}/>
                </Link>
            </nav>
        </header>
       
        
        <main>
            <CreateExerciseForm/>
        </main>
        
    </Page>
    )
}

export default CreateExercisePage