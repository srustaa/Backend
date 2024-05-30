//require('dotenv').config({path: './env'})
import express from "express";
//const express = require('express');
import dotenv from "dotenv";
import connectDB  from "./db/index.js";
//import userRoutes from './routes/users.routes.js';
//const usersRouter = require('./routes/users.routes');


dotenv.config({
    path: './env'
})

const app = express();

//app.use(express.json());

//app.use('/api/v1/users', userRoutes);


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT || 8000}`);
    });
})
.catch((err) => {
    console.error("MONGOdb connection failed !!! ", err);
})





/*import express from "express"
const app = express

 (async () => {})()
 try{
    await mongoose.connect(`${process.env.MONGODB_URI}/$
    {DB_NAME}`)
    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error
    })

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port $
        {process.env.PORT}`);
    })

}catch {error}{
    console.error("ERROR: ",error)
    throw err
 }
 */