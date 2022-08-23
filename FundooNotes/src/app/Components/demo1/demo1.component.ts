import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {  
//  name: any;  
//  message: any;  
//  sendToChild: any;  

 parentMessage = "message from parent" //P2C

  constructor() { }

  ngOnInit(): void {
  }

  //message:any;
  //this is one for child to parent sharing
  // receiveMessage($event :any) {
  //   this.message = $event
  // }


  //This is for parent to child, child to parent sharing
  // getResponse($event : any) {  
  //   this.message = $event;  
  // }  
  // submit() {  
  //   this.sendToChild = this.name;  
  // }  
}
