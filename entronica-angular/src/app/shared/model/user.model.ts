export interface User {
  _id: string
  name: string
  email: string
  mobileNo: string
  age: number
}

export interface ResponseUser {
  resultCode: number
  result: User[]
}
