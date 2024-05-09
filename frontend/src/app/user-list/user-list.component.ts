import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export default class UserListComponent implements OnInit{
  
  private userService = inject(UserService)

  ngOnInit(): void {
    this.userService.list()
      .subscribe(users => {
        console.log(users)
      })
  }
}
