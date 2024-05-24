import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '../model/user.interface';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './user-list.component.html',
})
export default class UserListComponent implements OnInit{
  
  private userService = inject(UserService)

  users: User[]=[];

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this.userService.list()
    .subscribe((users ) => {
      this.users = users;
    })
  }

  deleteUser(user: User){
    this.userService.delete(user.id)
    .subscribe(() => {
      this.loadAll();
    })
  }
}
