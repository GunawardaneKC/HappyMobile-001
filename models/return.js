const mongoose = require('mongoose');

const postreturnSchema = new mongoose.Schema({
    invoiceNo:{
        type:String,
        required:true,
    },
    cName:{
        type:String,
        required:true,
        minlength:[5, "minlength is 5"],
        maxlength:[20,"maxlength is 20"]
    },
    imeiNo:{
        type:String,
        required:true
    },
    model:{
        type:String,
        default:"Pending"                 
    },
    phoneNo:{
        type:Number,
        required:true,
        maxlength:[10,"maxlength is 10"]
    },
},
);

module.exports = mongoose.model('return',postreturnSchema);