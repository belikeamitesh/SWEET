const express = require('express')
const app = express()
const portNumber = 5000

app.get("/api", (req, res)=>{
    res.json({"users" : ["userOne", "userTwo", "userThree"]});
})

app.listen(portNumber, ()=>{console.log("Server listen on port " + portNumber)})