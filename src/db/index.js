import mongoose from "mongoose";
import { DBname } from "../constants.js";

const connectDb = async() =>{
    try {
     const connectionInstance = await mongoose.connect(
    `${process.env.MONGODB_URI}/${DBname}`
);
     console.log(`\n MongoDb connected  !!! HOST : ${connectionInstance.connection.host}
     }`)
    }
    catch (error){
        console.log(" error is here",error);
        // process.exit exit karatha h 
        process.exit(1)

    }
}
export default connectDb
const connectionInstance = await mongoose.connect(
    `${process.env.MONGODB_URI}/${DBname}`
);