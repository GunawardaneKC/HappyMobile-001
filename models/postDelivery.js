const mongoose = require('mongoose');
// const validator = require('validator');   

const postdeliverySchema = new mongoose.Schema({
    OrderID:{
        type:String,
        required:true,
    },
    Name:{
        type:String,
        required:true,
        minlength:[5, "minlength is 5"],
        maxlength:[20,"maxlength is 20"]
    },
    Address:{
        type:String,
        required:true   
    },
    phone:{
        type:Number,
        required:true,
        maxlength:[10,"maxlength is 10"]
    },
    NIC:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true 
    },
    Status:{
        type:String,
        default:"Pending"                   
    },
},
    {  
        timestamps: true
});

module.exports = mongoose.model('Delivery',postdeliverySchema);