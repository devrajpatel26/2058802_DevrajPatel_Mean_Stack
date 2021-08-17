import { Component} from '@angular/core';



@Component({
  selector: 'myTag',   //<app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

 
})

export class AppComponent {
  isShown: boolean = false ; // hidden by default
is1:boolean=true;


  toggleShow() {
  
  this.isShown = ! this.isShown;
  this.is1=!this.is1;
  }




}

