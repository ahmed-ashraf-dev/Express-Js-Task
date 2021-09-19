const log = require("jlogger")
module.exports={
     index(req,resp){
        log.info("index page requested")
        resp.write("welcome from home page");
        resp.end();
    },
     info(req,resp){
        log.info("info page requested")
        resp.write("welcome from info page")
        resp.end();
    },
    contact(req,resp){
        log.info("contact page requested")
        resp.write("welcome from contact page")
        resp.end();
    }
}