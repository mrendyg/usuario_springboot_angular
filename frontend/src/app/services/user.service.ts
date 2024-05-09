import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  list(){
    return this.http.get('http://localhost:8080/api/users')
  }

  get(id: number) {
    return this.http.get(`http://localhost:8080/api/users/${id}`)
  }

  create(user: any) {
    return this.http.post('http://localhost:8080/api/users', user)
  }
  
  update(id: number, user: any) {
    return this.http.put(`http://localhost:8080/api/users/${id}`, user)
  }
  
  delete(id: number) {
    return this.http.delete(`http://localhost:8080/api/users/${id}`)
  }
}
