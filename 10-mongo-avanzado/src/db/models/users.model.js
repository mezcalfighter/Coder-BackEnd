import {model,Schema} from "mongoose"

const userSchema = new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    orders:[
        {
            order_id:{
                type:Number
            },
            quantity:{
                type:Number
            }
        }
    ]
})

export const usersModel = model("Users",userSchema)