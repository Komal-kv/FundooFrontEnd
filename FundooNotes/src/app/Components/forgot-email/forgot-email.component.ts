import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.scss']
})
export class ForgotEmailComponent implements OnInit {
  forgotemailForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user : UserService) { }

  ngOnInit(): void {
    this.forgotemailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {   
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotemailForm.valid) {
      console.log("valid data", this.forgotemailForm.value);
      let data={
        "email" : this.forgotemailForm.value.email
      }
      this.user.forgotemail(data).subscribe((rup :any)=>{
          console.log("email request ====== ", rup);
      })

    }
    else{
      console.log("invalid data", this.forgotemailForm.value);
    }

  }

}
