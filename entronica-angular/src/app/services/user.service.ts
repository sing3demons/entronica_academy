import { RegisterModel } from './../shared/model/register.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ResponseUser, User } from '../shared/model/user.model'
import { UserLogin } from '../shared/model/login.model'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = []
  uri: string = 'http://localhost:3000/api/user'
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.uri}/user`)
  }

  login(email: string, password: string): Observable<any> {
    let body: UserLogin = { email, password }

    return this.http.post(`${this.uri}/login`, body)
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

    return this.http.post(`${this.uri}/register`, body)
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
        username: 'sing',
      },
      {
        _id: '2',
        name: 'sing2',
        email: 'sing2@dev.com',
        mobileNo: '02x-xxx-xxxx',
        age: 22,
        username: 'sing2',
      },
      {
        _id: '3',
        name: 'sing3',
        email: 'sing3@dev.com',
        mobileNo: '03x-xxx-xxxx',
        age: 33,
        username: 'sing3',
      },
    ]
  }
}
