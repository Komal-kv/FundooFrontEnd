import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/Services/dataservice/data.service';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-parent',
 // template: `{{message}}`,
 templateUrl : './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  name: any;  
  message: any;  
  sendToChild: any;

  constructor(private data:DataService, private user:UserService) { }

  ngOnInit(): void {
   // this.data.print.subscribe(message => this.message = message)
  }

  // getResponse($event: any) {  
  //   this.message = $event;  
  // }  

  submit() {  
    let data={
      "email":'divyavairagade@gmail.com',
      "password":'Komal123'
    }
    this.user.login(data).subscribe((res:any)=>{
      console.log("login successfull", res.data);
      
    })

    //this.sendToChild = this.name;  
  }  

}
