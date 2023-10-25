import { model, Schema } from "mongoose";

const productsSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        default:0
    },
    description:{
        type:String,
    },
})

export const productsModel = model("Products",productsSchema)