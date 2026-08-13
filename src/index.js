import mongoose from "mongoose";
import dotenv from "dotenv";

import { DBname } from "./constants.js";

import connectDb from "./db/index.js";


dotenv.config({
    path : './env'
})
connectDb();





/* first attempt
import express from "express"

const app = express()
( async() =>{

   try {
   await mongoose.connect(`${process.env.MONGODB_URI} / ${DBname}`)

   app.on("error", (error) => {
    console.log("ERR : ",error);
    throw error
   }
    )

    app.listen(process.env.PORT, ()=>{
        console.log(`port is listening on ${process.env.PORT} `);
    })
}
    catch (error)
    {
 console.error("ERROR :",error)
  throw err
    }

})
    */