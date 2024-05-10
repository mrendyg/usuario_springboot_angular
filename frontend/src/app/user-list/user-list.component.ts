import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './user-list.component.html',
})
export default class UserListComponent implements OnInit{
  
  private userService = inject(UserService)

  users: any[]=[];

  ngOnInit(): void {
    this.userService.list()
      .subscribe((users: any) => {
        this.users = users;
      })
  }
}
