import { RegisterModel } from './../shared/model/register.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ResponseUser, User } from '../shared/model/user.model'
import { UserLogin } from '../shared/model/login.model'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[]

  constructor(private http: HttpClient) {
    this.users = this.initMockUsers()
  }

  getAllUsers(): Observable<any> {
    // return this.users
    // return this.http.get<User[]>(
    //   'https://631dea1dcc652771a48dcb2a.mockapi.io/api/users'
    // )
    return this.http.get('http://localhost:3000/api/user/user')
  }

  login(email: string, password: string): Observable<any> {
    let body: UserLogin = { email, password }

    return this.http.post('http://localhost:3000/api/user/login', body)
  }

  register(
    username: string,
    password: string,
    age: number,
    name: string,
    mobileNo: string,
    email: string
  ): Observable<any> {
    let body: RegisterModel = {
      username,
      password,
      age,
      name,
      mobileNo,
      email,
    }
    console.log(body)

    return this.http.post('http://localhost:3000/api/user/register', body)
  }

  addUser(user: User): boolean {
    if (
      this.users.find((el) => {
        console.log('====================================')
        console.log(el)
        console.log('====================================')
        return el._id === user._id
      })
    )
      return false
    this.users.push(user)
    return true
  }

  getUserById(id: string): User | undefined {
    return this.users.find((el) => el._id === id)
  }

  initMockUsers(): User[] {
    return [
      {
        _id: '1',
        name: 'sing',
        email: 'sing@dev.com',
        mobileNo: '0xx-xxx-xxxx',
        age: 11,
      },
      {
        _id: '2',
        name: 'sing2',
        email: 'sing2@dev.com',
        mobileNo: '02x-xxx-xxxx',
        age: 22,
      },
      {
        _id: '3',
        name: 'sing3',
        email: 'sing3@dev.com',
        mobileNo: '03x-xxx-xxxx',
        age: 33,
      },
    ]
  }
}
