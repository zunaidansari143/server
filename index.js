const cors = require("cors");
require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const PORT =process.env.PORT || 5000




app.use(bodyParser.json());
app.use(cors())



app.listen(PORT,() => console.log(`Server is up and runing on port ${PORT}`) )










// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


// app.use('/user',userRouter);


// //connection with dataBase

// const  url = 'mongodb+srv://zunaidansari123:ZyVib2lGzhclRbdn@cluster0.syurknx.mongodb.net/'
// const port = process.env.PORT || 8080;
// mongoose.connect( url, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(port,()=>{
//         console.log(`database is connected and running on port ${port}`);
//     }))
//     .catch((err) => { 
//         console.log("error", err.message);
//     })
