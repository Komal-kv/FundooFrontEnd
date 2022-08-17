import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/dataservice/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {
  message:any;
  
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.recievedMessage.subscribe(message =>
      {this.message = message; 
        console.log(this.message);
      })
  }

}

