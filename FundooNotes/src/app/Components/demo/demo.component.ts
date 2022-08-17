import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit(): void {
  }

  submit(){
    let data={
      "email":'divyavairagade@gmail.com',
      "password":'Komal123'
    }
    this.user.login(data).subscribe((res:any)=>{
      console.log("login successfull ====== ", res.data);
      
    })
  }

}
