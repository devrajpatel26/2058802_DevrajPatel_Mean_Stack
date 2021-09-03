// load the express module 
let express = require("express");

// create the reference of epxress module 
let app = express();

// load the http module and connect to express module with Server property
let http = require("http").Server(app);

// load the socket.io module and connect http module 
// with IIFE features 
let io = require('socket.io')(http);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})

io.on("connection",(socket)=> {
    console.log("Client connected");
    // receive the message from client application 
  //  socket.on("obj",(msg)=> {
   //     console.log(msg);
   // })


    socket.on("t1",(msg,count)=> {
       

        if(count==0){
        socket.emit("test1","Hi have a wonderful day !!");
        }
        if(count==1){
            socket.emit("test1","Hello enjoy your day");
            }
        
    })
    // sending data to client 
  //  socket.emit("test1","Hi have a wonderful day !!");
    socket.emit("obj1","Hello Client connected server...");
})




// please run the server using http module not express module 
http.listen(9090,()=>console.log("Server running on port number 9090"));