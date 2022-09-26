import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  username: string = ''
  password: string = ''

  ngOnInit(): void {}
  onClick(): void {
    console.log(`username :${this.username} password: ${this.password}`)
    alert(`login success`)
    this.router.navigate(['user/user-list'])
  }
}
