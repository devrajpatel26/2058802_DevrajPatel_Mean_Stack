// load the modules 
let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

// create the reference 
let app = express();

//middleware    
app.use(bodyParser.json())          // enable json data from request body 
app.use(cors());                    // enable cors 

let customers = [
    
]

// search customer by id 
// http://localhost:9090/findCustomerById/100
// http://localhost:9090/findCustomerById/102
app.get("/findCustomerById/:cid",(request,response)=> {
    let cid = request.params.cid;
    let customer = customers.find(c=>c.cid==cid);
    if(customer==undefined){
        response.json({"msg":"Task not present with id "+cid})
    }else {
        response.json(customer);
    }
})

// get all customer details 
// http://localhost:9090/allCustomerDetails
app.get("/allCustomerDetails",(request,response)=> {
    response.json(customers);
})

// add new customer 
// http://localhost:9090/storeCustomerInfo
// {"cid":100,"cname":"Mahesh","age":24}
app.post("/storeCustomerInfo",(request,response)=> {
       let cust = request.body;         // in json format. 
       let customer = customers.find(c=>c.cid==cust.cid);
       if(customer==undefined){
             customers.push(cust);
        response.json({"msg":"Task added sucessfully"})
    }else {
        response.json({"msg":"Task id must be unique "});
    }
})




// delete customer info
// http://localhost:9090/deleteCustomerInfo/100

app.delete("/deleteCustomerInfo/:cid",(request,response)=> {
        let cid = request.params.cid;
        let index = customers.findIndex(c=>c.cid==cid);
        if(index==-1){
            response.json({"msg":"Task not present error! "+cid})
        }else {
            customers.splice(index,1);  // splice(indexposition,deleteCount)
            response.json({"msg":"Task deleted successfully"});
        }
})

app.listen(9090,()=>console.log("Server running on port number 9090"));