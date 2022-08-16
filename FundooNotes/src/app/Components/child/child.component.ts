import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() Name:any;  
  @Output() getResponse = new EventEmitter; 
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {  
    this.getResponse.emit('Message from child');  
  }  

}
