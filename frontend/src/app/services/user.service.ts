import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  list(){
    return this.http.get<User[]>('http://localhost:8080/api/users')
  }

  get(id: number) {
    return this.http.get<User>(`http://localhost:8080/api/users/${id}`)
  }

  create(user: User) {
    return this.http.post<User>('http://localhost:8080/api/users', user)
  }
  
  update(id: number, user: User) {
    return this.http.put<User>(`http://localhost:8080/api/users/update/${id}`, user)
  }
  
  delete(id: number) {
    return this.http.delete(`http://localhost:8080/api/users/delete/${id}`)
  }
}
