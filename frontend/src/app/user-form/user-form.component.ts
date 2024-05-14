import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
})
export default class UserFormComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private userService = inject(UserService);

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  create(){
    const user = this.form.value;
    this.userService.create(user)
    .subscribe(() =>{
      this.router.navigate(['/']);
    });
  }
}
