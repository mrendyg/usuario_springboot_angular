import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export default class UserLoginComponent{

}
