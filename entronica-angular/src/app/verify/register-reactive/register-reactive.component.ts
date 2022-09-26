import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.css'],
})
export class RegisterReactiveComponent implements OnInit {
  registrationForm: FormGroup
  isSubmitted = false
  isSuccess = false
  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      mobileNo: [
        '',
        [
          Validators.required,
          Validators.pattern('^(0)[6-9]{1}[0-9]{8}|^(999)d{7}'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
    })
  }
  ngOnInit(): void {}
  onSubmit(): void {
    this.isSubmitted = true
    if (this.registrationForm.invalid) {
      alert('fail')
      console.log(this.registrationForm)
    } else {
      this.isSuccess = true
      alert('register success')
      console.log(this.registrationForm)
    }
  }
}
