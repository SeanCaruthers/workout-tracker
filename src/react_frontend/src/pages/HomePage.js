import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Page from '../components/shared/Page'
import ExerciseTable from '../components/exercises/tables/ExerciseTable.js';


function HomePage(props){

    return(
    <Page title="Home">

        <header>
            <h1>Exercise Tracker</h1>
            <p>CS290 Assignment 4</p>
        </header>

        <main>
            <ExerciseTable update_route={props.update_route}/>

            <section>
                <h3>Create New Entry</h3>
                <Link to={props.create_route.path}>
                    <MdAddCircle title={"Add a new Exercise"}></MdAddCircle>
                </Link>
            </section>
        </main>
    </Page>
    )
}

export default HomePage