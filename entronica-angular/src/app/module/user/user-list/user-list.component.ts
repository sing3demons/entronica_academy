import { Component, OnInit } from '@angular/core'
import { User } from '../../../model/user.model'
import { UserService } from '../../../services/user.service'

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
    this.users = this.userService.getAllUsers()
  }
  showDetail(user: User): void {
    this.selectedUser = user
  }
}