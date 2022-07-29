import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.scss']
})
export class ForgotEmailComponent implements OnInit {
  forgotemailForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgotemailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotemailForm.invalid) {
      return;
    }

  }

  onReset() {
    this.submitted = false;
    this.forgotemailForm.reset();
  }

}
