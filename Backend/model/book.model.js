import mongoose from "mongoose";


const bookSchema=mongoose.Schema({//created schema for the database
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
//creating the model for the schema
const Book=mongoose.model("Book",bookSchema)
export default Book