// load the module 

let express = require("express");
let bodyParser = require("body-parser");

let userDetails = [];

//creating the reference of express module 
let app = express();
// which is use to enable post data receving from normal html form. 
app.use(bodyParser.urlencoded({extended:true}))



app.get("/",(request,response)=> {
    response.send("Welcome to Express JS Simple Module");
})
app.get("/aboutus",(request,response)=> {
    //response.send("Welcome to About us page");
    response.sendFile(__dirname+"\\aboutus.html");
})

app.get("/delete",(request,response)=> {
    //response.send("Welcome to About us page");
    response.sendFile(__dirname+"\\delete.html");
})

app.get("/update",(request,response)=> {
    //response.send("Welcome to About us page");
    response.sendFile(__dirname+"\\update.html");
})

app.get("/show",(request,response)=> {
    //response.send("Welcome to About us page");
    response.sendFile(__dirname+"\\show.html");


 

})



app.get("/contactus",(request,response)=> {
    //response.send("Welcome to contact us page");
    response.sendFile(__dirname+"\\contactus.html");
})
app.get("/index",(request,response)=> {
    //response.send("Welcome to index page");
    //response.sendFile("C:\\Users\\91990\\Desktop\\TCS MEAN Stack Training 2021\\Notes\\MyRepository\\Node JS\\express modules\\index.html");
    //response.send(__dirname);
    response.sendFile(__dirname+"\\index.html");
})

app.get("/login",(request,response)=> {
    response.sendFile(__dirname+"\\login.html");
})



app.get("/SignUp",(request,response)=> {
    response.sendFile(__dirname+"\\register.html");
})

// app.get("/register",(request,response)=>{
//     response.send("Get method...");
// });

app.post("/register",(request,response)=>{
            let userDetail = request.body;      // json data from body. 
            console.log(userDetail.cname);
            userDetails.push(userDetail);       // store in array. 



            let mongoClient = require("mongodb").MongoClient;
            //url Details
            let url ="mongodb://localhost:27017";
            // connect the database 
            mongoClient.connect(url,(err,client)=> {
                if(!err){
                    console.log("Connected")
                    let db = client.db("tcsmean");
                   
                    let emp = {courseId:userDetail.courseId,cname:userDetail.cname, des:userDetail.des,amount:userDetail.amount};
                    db.collection("course").insertOne(emp,(err,result)=> {
                        if(!err){
                            console.log("Record inserted successfully")
                            console.log(result);
                        }else {
                            console.log(err);
                        }
                        client.close();
                    })
                }else {
                    console.log(err);
                }
            })
            
        
            response.sendFile(__dirname+"\\index.html");

});











app.post("/delete",(request,response)=>{
    let userDetail = request.body;      // json data from body. 
    console.log(userDetail.courseId1);
 



    let mongoClient = require("mongodb").MongoClient;
    //url Details
    let url ="mongodb://localhost:27017";
    // connect the database 
    mongoClient.connect(url,(err,client)=> {
        if(!err){
            console.log("Connected")
            let db = client.db("tcsmean");
           
            
            db.collection("course").deleteOne({courseId:userDetail.courseId1},(err,result)=> {
                if(!err){
                    console.log("deleted succesfully")
                    console.log(result);
                }else {
                    console.log(err);
                }
                client.close();
            })
        }else {
            console.log(err);
        }
    })
    

    response.sendFile(__dirname+"\\index.html");

});











app.post("/update",(request,response)=>{
    let userDetail = request.body;      // json data from body. 
    console.log(userDetail.courseId1);
 



    let mongoClient = require("mongodb").MongoClient;
    //url Details
    let url ="mongodb://localhost:27017";
    // connect the database 
    mongoClient.connect(url,(err,client)=> {
        if(!err){
            console.log("Connected")
            let db = client.db("tcsmean");
           
            
            db.collection("course").updateOne({courseId:userDetail.courseId2},{$set:{amount:userDetail.amount1}},(err,result)=> {
                if(!err){
                    console.log("update succesfully")
                    console.log(result);
                }else {
                    console.log(err);
                }
                client.close();
            })
        }else {
            console.log(err);
        }
    })
    

    response.sendFile(__dirname+"\\index.html");

});






















app.listen(9090,()=>console.log("Server running on port number 9090"))
