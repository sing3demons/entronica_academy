import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service'
import { ResponseUser } from 'src/app/shared/model/user.model'

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
    // console.log(`username :${this.username} password: ${this.password}`)
    // alert(`login success`)
    this.userService.login(this.username, this.password).subscribe((data) => {
      console.log(data)

      if (data.resultCode !== 20000) {
        alert('login fail: ' + data.resultCode)
        return
      }
      this.router.navigate(['user/user-list'])
    })
  }
}
