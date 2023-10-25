import {Schema, SchemaTypes, model} from "mongoose"

const cartsSchema = new Schema({
    products:[
        {
            product:{
                type:SchemaTypes.ObjectId,
                ref:"Products"
            },
            quantity:{
                type:Number
            },
            _id:false
        }
    ]
}) 

export const cartsModel = model("Carts",cartsSchema)