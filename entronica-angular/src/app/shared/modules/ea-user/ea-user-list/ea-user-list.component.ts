import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/model/user.model'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'ea-user-list',
  templateUrl: './ea-user-list.component.html',
  styleUrls: ['./ea-user-list.component.css'],
})
export class EaUserListComponent implements OnInit {
  constructor(private userService: UserService) {}
  users: User[] = []
  selectedUser: User | undefined
  ngOnInit(): void {
    this.users = this.userService.getAllUsers()
  }
  showDetail(user: User): void {
    this.selectedUser = user
  }
}
