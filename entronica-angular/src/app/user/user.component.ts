import { Component, OnInit } from '@angular/core'
import { UserService } from '../services/user.service'
import { User } from '../shared/model/user.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[] = []
  selectedUser: User | undefined
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.userService.getAllUsers().subscribe((data) => (this.users = data))
    this.userService.getAllUsers().subscribe({
      next: ({ resultData }) => {
        console.log(resultData.users)
        this.users = resultData.users
      },
      error: (error) => console.log(error),
    })
  }
  onSelect(user: User): void {
    this.selectedUser = user
  }
}
