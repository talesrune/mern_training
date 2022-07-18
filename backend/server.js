const express = require("express")
const app = express()

// app.use(()=>{ //use is get/put/post
//     console.log("We got a request")
// })

app.get('/', (req, res) => {
  res.send('Hello W')
})

app.listen(4000,() =>{
    console.log("listening on port 4000")
})