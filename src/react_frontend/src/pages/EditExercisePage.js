import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Page from '../components/shared/Page.js'

import UpdateExerciseForm from '../components/exercises/forms/UpdateExerciseForm.js';

function EditExercisePage(props){

    return(
    <Page title={"Update Entry"}>


        <header>
            <nav>
                <Link to="/">
                    <MdArrowBack className="icon" title={"return"}/>
                </Link>
            </nav>
        </header>
        

        <main>
            <UpdateExerciseForm/>
        </main>
        

    </Page>
    )
}

export default EditExercisePage