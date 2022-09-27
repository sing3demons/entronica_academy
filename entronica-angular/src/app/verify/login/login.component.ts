import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}
  username: string = ''
  password: string = ''

  ngOnInit(): void {}
  onClick(): void {
    this.userService.login(this.username, this.password).subscribe({
      next: (data) => {
        if (data.resultCode !== 20000) {
          alert('login fail: ' + data.resultCode)
          return
        }
        this.router.navigate(['user/user-list'])
      },
      error: ({ error }) => {
        alert(error.resultData)
      },
    })
  }
}
