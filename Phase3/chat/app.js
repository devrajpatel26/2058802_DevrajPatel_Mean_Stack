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


    socket.on("t1",(name,count,msg)=> {
       

      let mongoClient = require("mongodb").MongoClient;
      //url Details
      let url ="mongodb://localhost:27017";
      // connect the database 
      mongoClient.connect(url,(err,client)=> {
          if(!err){
              console.log("Connected")
              let db = client.db("tcsmean");
             
              let emp = {_id:count,name:name,value:msg };
              db.collection("message").insertOne(emp,(err,result)=> {
                  if(!err){
                      console.log("Record inserted successfully")
                      console.log(result);
                      console.log(emp);
                  }else {
                      console.log(err);
                  }
                  client.close();
              })
          }else {
              console.log(err);
          }
      })
    
        
    })
    // sending data to client 
  //  socket.emit("test1","Hi have a wonderful day !!");
    socket.emit("obj1","Hello Client connected server...");
})




// please run the server using http module not express module 
http.listen(9090,()=>console.log("Server running on port number 9090"));