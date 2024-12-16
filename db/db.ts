import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("MongoDB connected successfully");
        });
        connection.on('error',(error:any)=>{
            console.log("Error connecting to MongoDB");
            console.log(error);
        });
        
    } catch (error) {
        console.log("Error encountered");
        console.log(error);
        
    }
}