import mongoose from "mongoose";

const URI = "mongodb+srv://emanuel:nate0397@cluster0.f1vmpgn.mongodb.net/db47315?retryWrites=true&w=majority"

mongoose
    .connect(URI)
    .then(()=>console.log("Conectado a la DB"))
    .catch((err)=>console.log(err))

