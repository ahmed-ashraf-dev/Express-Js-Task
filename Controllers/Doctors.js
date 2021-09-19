let doctors = [{"id":1,"name":"ahmed","age":20},{"id":2,"name":"mohamed","age":25},
{"id":3,"name":"asharf","age":30}];

module.exports.index = (req,resp)=>{
    return resp.send(doctors);
},
module.exports.add = function(req,resp){
    let doctor ={
        "id":doctors.length +1,
        "name":req.body.name,
        "age":req.body.age
    }
    doctors.push(doctor);
    return resp.send(doctor);
},
module.exports.getDoctor = function(req,resp){
    for(let index in doctors){
        if(doctors[index].id == req.params.id)
        return resp.send(doctors[index])
    }
},
module.exports.update = function(req,resp){
    for(let index in doctors){
        if(doctors[index].id == req.params.id){
            doctors[index].name = req.body.name
            doctors[index].age = req.body.age
            return resp.send(doctors[index])
        }
    }
},
module.exports.deletee = function(req,resp){
    for(let index in doctors){
        if(doctors[index].id == req.params.id){
            doctors.splice(index,1)
            return resp.send("User Deleted")
        }
    }
    return resp.send("user not found")
}