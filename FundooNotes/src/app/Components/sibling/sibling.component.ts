import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/dataservice/data.service';

@Component({
  selector: 'app-sibling',
  //templateUrl: './sibling.component.html',
  template: `{{message}}
  <button (click)="newMessage()">New Message</button>`,
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {
  message:any;
  colorarray = [{ Colorcode: "DeepSkyBlue" }, { Colorcode: "Orange" }]

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.print.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.demoView("Hello from sibling")
  }
  
}
