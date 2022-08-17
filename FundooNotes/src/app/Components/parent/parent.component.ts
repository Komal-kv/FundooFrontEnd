import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/Services/dataservice/data.service';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-parent',
  templateUrl : './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  name: any;  
  message: any;  
  strArray: any[] = [{ 'name': 'Komal' }, { 'name': 'Sneha' }, { 'name': 'Payal' }];

  constructor(private data:DataService, private user:UserService) { }

  ngOnInit(): void {
  
  } 

  sentdata(){
    this.data.demoView(this.strArray)
  } 

}
