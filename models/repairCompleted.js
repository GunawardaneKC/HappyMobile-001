const mongoose = require('mongoose');

const completedSchema = new mongoose.Schema({
  
    repairID: {
        type:String,
        required:true
    },

    customerName: {
        type:String,
        required:true
    },

    phoneNum: {
        type:String,
        required:true
    },

    device: {
        type:String,
        required:true
    },

    Brand:{
        type:String,
        required:true
    },

    Model:{
        type:String,
        required:true 
    }, 

    reason:{
        type:String,
        required:true 
    },

    givenDate:{
        type:String,
        required:true 
    },

    customerAddress: {
        type:String,
        required:true
    },
    
    repairPrize: {
        type:String,
    }

});

const Completed = mongoose.model('RepairCompleted', completedSchema);

module.exports = Completed;
