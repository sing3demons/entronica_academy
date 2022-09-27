import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { User } from 'src/app/shared/model/user.model'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'ea-user-list',
  templateUrl: './ea-user-list.component.html',
  styleUrls: ['./ea-user-list.component.css'],
})
export class EaUserListComponent implements OnInit {
  // selectedUser: User | undefined
  @Input()
  userList: User[] = []
  @Input()
  selectedUser: User | undefined

  @Output()
  onSelectUser: EventEmitter<User> = new EventEmitter<User>()

  constructor() {}

  // users: User[] = []
  ngOnInit(): void {
    // this.users = this.userService.getAllUsers()
  }
  
  showDetail(user: User): void {
    this.selectedUser = user
    this.onSelectUser.emit(user)
  }
}
