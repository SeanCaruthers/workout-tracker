
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { React, useState } from 'react';

import HomePage from './pages/HomePage.js'
import EditExercisePage from './pages/EditExercisePage.js'
import CreateExercisePage from './pages/CreateExercisePage.js'

import "./styles/App.css"

import routes from "./config/routes.js"

import state from "./config/stateManager"

function App() {  

  const [current_exercise, setCurrentExercise] = useState(null);
  const [exercises, setExercises] = useState([]);

  const _state = state.getState();

  _state.exercises = { 
      "variable": exercises,
      "mutation": setExercises,
  }

  _state.current_exercise =  {
    "variable": current_exercise,
     "mutation": setCurrentExercise
  }

  return (
    <div className="App">
      <Router>
 
          <Route path={routes.HomePage.path} exact>
            <HomePage 
              update_route={routes.EditExercisePage}
              create_route={routes.CreateExercisePage}>
            </HomePage>
          </Route>

          <Route path={routes.CreateExercisePage.path}>
            <CreateExercisePage
              home_route={routes.HomePage}>
            </CreateExercisePage>
          </Route>

          <Route path={routes.EditExercisePage.path}>
            <EditExercisePage 
                home_route={routes.HomePage}>
            </EditExercisePage>
          </Route>

      </Router>
    </div>
  );
}

export default App;