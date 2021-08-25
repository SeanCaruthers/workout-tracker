'use strict';

async function main(){
    
    // models
    const exercise = await require("./models/exercise");

    // express setup
    const PORT = process.env.PORT || 3000;
    
    const express = require("express");
    const app = express();
    app.use(express.static('public'));
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));

    // get around cors errors
    app.use(function(req, res, next){
        res.header("Access-Control-Allow-Origin", "http://localhost:8000");
        res.header("Access-Control-Allow-Methods", ["GET", "POST", "DELETE", "PUT"]);
        res.header("Access-Control-Allow-Headers", ["*"])
        next()
    })

    // routes
    app.post("/exercises", async function(req, res) {

        // all required
        const {name, reps, weight, unit, date} = req.body;
      
        // create exercise in MongoDB
        let new_exercise;
        try{
            new_exercise = await exercise.create(name, reps, weight, unit, date);
        }
        catch(err){
            console.log(err, err.stack);
        }
    
        res.setHeader("content-type", "application/json");

        res.status(201).json(new_exercise);
    });
    

    app.get("/exercises",  async function(req, res){

        let query_results = [];
        
        try{
            query_results = await exercise.retrieve();
        }
        catch(err){
            console.log(err, err.stack);
        }
        
        res.status(200).json(query_results);
    });

    app.put("/exercises/:id", async function(req, res){
        console.log(req.params)
        let updated_entry;
        try{
            updated_entry = await exercise.patch(req.params.id, req.body); 
        }
        catch(err){
            console.log(err, err.stack);
        }  
        res.setHeader("content-type", "application/json");

        // respond with JSON of updated object
        res.status(200).json(updated_entry);
    });

    app.delete("/exercises/:id", async function(req, res) {
        
        const id = req.params.id
        
        let query_results;
        // delete entries corresponding to id
        try{
            query_results = await exercise.deleteById(req.params.id);
        }
        catch(err){
            console.log(err, err.stack);
        }

        res.status(204).json();
    });

    app.get("/reset", async function(req, res){
        let response = await exercise.deleteMany({});

        res.send(response);
    });

    app.listen(PORT, () => {console.log(`app listening at port ${PORT}`)})
}

main();
    
    /*
    /  1. install and setup mongo locally,
    /  2. npm init
    /  3. install mongodb/mongoose
    /  4. add express boilerplate
    /  5. Setup mongo connection via mongoose 
    /  5. Create a Schema and model directory
    /  6. define exercise schema in schema directory
    /  7. import schema definition to exercise model and create model with mongoose
    /  8. define model functions
    /  5. add 4 route handlers with method GET (create, retrieve, update, delete)

    */