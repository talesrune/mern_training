const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const loginRoutes =require('./routes/login_routes')

//initalize express app
const app = express()

mongoose.connect('mongodb://localhost:27017/bookstore')//, { useNewUrlParser: true, useUnifiedTopology: true }) //random is new database
    .then(() => {
        console.log("mongo connection success")
    })
    .catch(err => {
        console.log("mongo connection error")
        console.log(err)
    })

// app.get('/', (req, res) => {
//   res.send('Hello W')
// })
app.use(bodyParser.json());//express.urlencoded({ extended: true })); //parse body
//app.use('/api/workouts', workoutRoutes);

app.use('/api/login', loginRoutes);

app.listen(4000,() =>{
    console.log("listening on port 4000")
})