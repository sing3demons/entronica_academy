import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.css'],
})
export class RegisterReactiveComponent implements OnInit {
  registrationForm: FormGroup
  isSubmitted = false
  isSuccess = false
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
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
      return
    }
    // this.isSuccess = true

    this.userService
      .register(
        this.registrationForm.controls['username'].value,
        this.registrationForm.controls['password'].value,
        this.registrationForm.controls['age'].value,
        this.registrationForm.controls['name'].value,
        this.registrationForm.controls['mobileNo'].value,
        this.registrationForm.controls['email'].value
      )
      .subscribe({
        next: (data) => {
          if (data.resultCode !== 20100) {
            alert('login fail: ' + data.resultCode)
            return
          }
          this.router.navigate(['verify/login'])
        },
        error: (error) => {
          console.log(error)
        },
      })
  }
}
