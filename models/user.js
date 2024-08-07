
const mongoose =require('mongoose');
// const bcrypt=require ('bcrypt');


//Define the user schema
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type:String,
    },
    mobile:{
        type: String
    },
    address:{
        type:String,
        require:true
    },
    adharCardNumber:{
        type: Number, 
        require: true,
        unique: true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:['voter','admin'],
        default:'voter'
    },
    isVoted:{
        type:Boolean,
        default:false
    },

});
const User =mongoose.model('User',userSchema);
module.exports=User;