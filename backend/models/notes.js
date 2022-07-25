const mongoose = require('mongoose');
const { userInfo } = require('os');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    note_number:{
        type:Number,
        required:true // here required is like a backend validation
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

})

const Note = mongoose.model("Notes",userSchema) //here passing two parameters for model function."notes" is like the table name where data from schema coming.second parameter is the schema I created above
module.exports = Note;//should export student model to use in routes