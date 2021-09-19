const express = require("express");
var bodyParser = require('body-parser');
const {index,add,getDoctor,update,deletee} = require("./Controllers/Doctors")
const {login} = require("./Controllers/auth")

const app = express();

app.use(bodyParser.json())

function checkAuth(req,resp,next){
    if (req.headers["authorization"] == "123456")
        {
            next()
        }
    else{
        resp.json("no access")
    }
}


app.get("/doctors" , checkAuth ,index)

app.post("/doctors/auth" , login)

app.post("/doctors" , add)

app.get("/doctors/:id", getDoctor)

app.put("/doctors/:id",update)

app.delete("/doctors/:id",deletee)



app.listen(5050,function(req,resp){
    console.log("Server run now")
})

