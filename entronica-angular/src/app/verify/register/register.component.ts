import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'

interface IUser {
  username: ''
  password: ''
  age: ''
  name: ''
  mobileNo: ''
  email: ''
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerData = {
    username: '',
    password: '',
    age: '',
    name: '',
    mobileNo: '',
    email: '',
  }

  isSubmitted = false
  constructor() {}

  ngOnInit(): void {}
  onSubmit(registrationForm: NgForm): void {
    this.isSubmitted = true
    if (registrationForm.invalid) {
      alert('register fail')
      return
    }

    let username = registrationForm.form.controls['username'].value
    let password = registrationForm.form.controls['password'].value
    let age = registrationForm.form.controls['age'].value
    let name = registrationForm.form.controls['name'].value
    let mobileNo = registrationForm.form.controls['mobileNo'].value
    let email = registrationForm.form.controls['email'].value

    this.showDetail({ username, password, age, name, mobileNo, email })
  }
  showUser: IUser | undefined
  showDetail(user: IUser): void {
    console.log(user)
    this.showUser = user
  }
}
