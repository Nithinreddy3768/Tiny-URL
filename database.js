const mongoose = require('mongoose');
require('dotenv').config();
class DataBase{
    constructor(){
        this.connect();
    }
    connect(){
        mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@cluster0.ufj6str.mongodb.net/?retryWrites=true&w=majority`)
        .then(()=>{
            console.log("Database is connected");
        })
        .catch((err)=>{
            // console.log("Hi");
            console.log(err);
        })
    }
}
module.exports = new DataBase();