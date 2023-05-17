const mongoose = require('mongoose');

const postwarrantySchema = new mongoose.Schema({
    invoiceNo:{
        type:String,
        required:true,
    },
    cName:{
        type:String,
        required:true,
        minlength:[2, "minlength is 2"],
        maxlength:[20,"maxlength is 20"]
    },
    imeiNo:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true                
    },
    phoneNo:{
        type:Number,
        required:true,
        maxlength:[10,"maxlength is 10"]
    },
    status:{
        type:String,
        default:"Pending"
    },
},
);

module.exports = mongoose.model('warranty',postwarrantySchema);