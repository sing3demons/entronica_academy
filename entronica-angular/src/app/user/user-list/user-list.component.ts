import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/shared/model/user.model'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {}
  users: User[] = []
  selectedUser: User | undefined
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: ({ resultData }) => {
        console.log(resultData.users)
        this.users = resultData.users
      },
      error: (error) => console.log(error),
    })
  }
  showDetail(user: User): void {
    // console.log(this.selectedUser)
    this.selectedUser = user
  }
}
