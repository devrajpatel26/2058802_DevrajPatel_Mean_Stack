import { Component,OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Angular Example';
  products: any = [];
  myForm!: FormGroup;

 
  constructor(private httpClient: HttpClient, public form:FormBuilder){}
  ngOnInit():void{
   

    this.allQuestion.forEach((q: { question: string; })=> {
      this.myForm?.addControl(q.question,this.form.control(""));
                              //user:new FormControl();
                              //q.question
  })
    this.myForm=this.form.group({});
    
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
     

      this.products = data;

    
    })


  }



  submit(){
    console.log(this.myForm);

    console.log(Object.values(this.myForm.value))
  }

  allQuestion=[]=this.products;
}

