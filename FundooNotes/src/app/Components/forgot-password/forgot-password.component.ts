import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user : UserService) { }

  ngOnInit(): void {
    this.forgotpasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotpasswordForm.valid) {
      console.log("valid data", this.forgotpasswordForm.value);
      let data={
        "password" : this.forgotpasswordForm.value.password,
        "confirmPassword" : this.forgotpasswordForm.value.confirmPassword
      }
      this.user.forgotpassword(data).subscribe((kom :any)=>{
          console.log("password request ====== ", kom);
      })
    }
    else{
      console.log("invalid data", this.forgotpasswordForm.value);
    }

  }


}
