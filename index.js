let http = require('http')
let routes = require('./routes')

let handleRequest = (req,res)=>{
    if(routes[req.url] !== undefined){
        routes[req.url](req,res)
    }else{
        res.end("404, no such route")
    }
}

let server = http.createServer(handleRequest)

server.listen(8000, ()=>{
    console.log("Listening...")
})