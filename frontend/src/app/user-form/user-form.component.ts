import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
})
export default class UserFormComponent {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });
}
