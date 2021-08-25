class Route {
    constructor(path, title){
        this.path = path;
        this.title = title;
    }
}

const routes = {
    HomePage: new Route("/", "Home"),
    CreateExercisePage: new Route("/exercise/create", "create"),
    EditExercisePage: new Route("/exercise/update", "update")
}

export default routes;