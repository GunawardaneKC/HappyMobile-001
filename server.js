require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')

const PORT = process.env.PORT || 5000


const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// app.use(express.static('upload'));
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

// Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productRouter'))
app.use('/api', require('./routes/paymentRouter'))
const postEmp = require('./routes/emp');
const postRepair = require('./routes/postRepair');
const postOrd = require('./routes/paymentRouter');
const postDelivery = require('./routes/postDelivery');
const postWarranty = require('./routes/postWarranty');



//routes middelware
app.use(postEmp);
app.use(postRepair);
app.use(postOrd);
app.use(postDelivery);
app.use(postWarranty);

// app.get("/",(req,res)=>{
//     res.send("upload file")
// })

// Connect to mongodb
const DB_URL='mongodb+srv://kc:12345@happy.pzpbw6f.mongodb.net/test'
mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=> console.log('DB connection error',err));

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
//     })
// }


app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})