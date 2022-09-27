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
    this.users = this.userService.getAllUsers()
  }
  onSelect(user: User): void {
    this.selectedUser = user
  }
}
