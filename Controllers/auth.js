const users = [
    {
        "email":"test@gmail.com",
        "password":12345
    }
]
module.exports.login = function(req,resp){
    for(let user of users){
        if(user.email == req.body.email){
            if(user.password == req.body.password)
            resp.json({"toke": "Welcome"})
        }
    }
    resp.send("invaled email")
}