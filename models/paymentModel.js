const mongoose = require('mongoose')


const paymentSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required : true
    },
    user_id: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    payment:{
        type: String,
        default: "Pending"
    },
    // address:{
    //     type: Object,
    //     required: true
    // },
    cart:{
        type: Array,
        default: []
    },
    // status:{
    //     type: Boolean,
    //     default: false
    // }
}, {
    timestamps: true
})


module.exports = mongoose.model("Payments", paymentSchema)