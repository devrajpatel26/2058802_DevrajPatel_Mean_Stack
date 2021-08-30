import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerRef = new FormGroup({
  
    id:new FormControl(),
    cid:new FormControl(),
    task:new FormControl(),
    deadline:new FormControl()
  });
  storeMsg?:string;
  deleteMsg?:string; 
   
  customers:Array<Customer>=[];
  
  flag:boolean = false; 
  id?:number;
  cid?:number;
  taskId?:number;
  deadline?:Date;

  constructor(public custSer:CustomerService) { } // DI for Customer Service 
  // it call automatically after constructor : it call only once 
  ngOnInit(): void {
      console.log("called..")
      this.getAllCustomers();
  }
  storeInfo() {
    let customer = this.customerRef.value;
    //console.log(customer);    
    this.custSer.storeCustomerInfo(customer).subscribe(result=>{
      //console.log(result)
      this.storeMsg=result.msg;
         this.getAllCustomers();
    },error=>console.log(error));

    this.customerRef.reset();
  }

  getAllCustomers(){
    this.custSer.retrieveAllCustomerInfo().subscribe(result=> {
        this.customers=result;
    },error=>console.log(error));
  }

  deleteRec(cid:any){
    //console.log(cid);
    this.custSer.deleteCustomerInfo(cid).subscribe(result=>{
      this.deleteMsg=result.msg;
      this.getAllCustomers();
    },error=>console.log(error));
  }




}




