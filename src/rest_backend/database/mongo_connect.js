// see using mongoose for mongoDB exploration
const mongoose = require("mongoose");

const db_port = process.env.DB_PORT || 27017;
const db_host = process.env.DB_HOST || 'localhost'
const db_auth = process.env.DB_NAME || 'admin';
const db_user = process.env.DB_USER || 'test';
const db_pass = process.env.DB_PASS || 'test';

console.log("Attempting to initiate MongoDB connection")

let db = new Promise((resolve, reject) => {
    let connection;
    
    // add findAndModify options https://mongoosejs.com/docs/deprecations.html#findandmodify
    try{
        mongoose.connect(
            `mongodb://${db_user}:${db_pass}@${db_host}:${db_port}/${db_auth}`,
            { 
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            },
        )
        connection = mongoose.connection;

        connection.once("open", () => {
            console.log("Mongoose has connected to MongoDB!")
        });  

    }
    catch(error){ 
        console.log(error, error.stack);
        reject(error);
    }

    resolve(connection);
    
});

module.exports = db;