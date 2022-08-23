import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {
  //message: string = "How are you ?" //C2P
  // @Output() messageEvent = new EventEmitter<string>(); //C2P

  @Input() childMessage: any; //P2C
  message : any ="Hello World...!!" //p2c

  // @Input() Name :any;  
  // @Output() getResponse = new EventEmitter; 

  constructor() { }

  ngOnInit(): void {
  }

  //this for c 2 p sharing
  // sendMessage() {
  //   this.messageEvent.emit(this.message)
  // }

  //this for p to c and c to p sharing
  // onClick() {  
  //   this.getResponse.emit('Message from child');  
  // } 

}
