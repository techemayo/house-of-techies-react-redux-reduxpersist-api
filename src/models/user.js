const  mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        require: true,
    } ,
    username:{
        type:String,
        require: true,
        unique: true
    } ,
    password:{
        type:String,
        require: true,
    } ,
    
});

const user = new mongoose.model("userSchema", userSchema)

module.exports = user;

