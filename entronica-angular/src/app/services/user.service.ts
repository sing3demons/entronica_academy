import { Injectable } from '@angular/core'
import { User } from '../model/user.model'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[]

  constructor() {
    this.users = this.initMockUsers()
  }

  getAllUsers(): User[] {
    return this.users
  }

  addUser(user: User): boolean {
    if (this.users.find((el) => el.id === user.id)) return false
    this.users.push(user)
    return true
  }

  getUserById(id: string): User | undefined {
    return this.users.find((el) => el.id === id)
  }

  initMockUsers(): User[] {
    return [
      {
        id: '1',
        name: 'sing',
        email: 'sing@dev.com',
        mobileNo: '0xx-xxx-xxxx',
        age: 11,
      },
      {
        id: '2',
        name: 'sing2',
        email: 'sing2@dev.com',
        mobileNo: '02x-xxx-xxxx',
        age: 22,
      },
      {
        id: '3',
        name: 'sing3',
        email: 'sing3@dev.com',
        mobileNo: '03x-xxx-xxxx',
        age: 33,
      },
    ]
  }
}
