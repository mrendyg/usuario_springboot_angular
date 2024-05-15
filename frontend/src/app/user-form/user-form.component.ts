import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { subscribe } from 'diagnostics_channel';
import { User } from '../model/user.interface';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
})
export default class UserFormComponent implements OnInit{
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private userService = inject(UserService);
  private route = inject(ActivatedRoute)

  //inicializacion de datos
  form?: FormGroup;
  user?: User;

  //metodo para enviar la informacion a mi editor de usuario
  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');  

    if (id) {
      this.userService.get(parseInt(id))
       .subscribe(user => {
        this.user = user;
          //rellenamos con los datos del id seleccionado
          this.form = this.formBuilder.group({
          name: [user.name, [Validators.required]],
          lastName: [user.lastName, [Validators.required]],
          email: [user.email, [Validators.required]],
          phone: [user.phone, [Validators.required]],
         })
        });
    } else {
      //si no hay datos, entocens es una creacion de usuario
      this.form = this.formBuilder.group({
        name: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phone: ['', [Validators.required]],
      })

    }
    
      
  }

  
//enviamos los datos para crear un nuevo usuario
  save(){
    const userForm = this.form!.value;

    if (this.user){
      this.userService.update(this.user.id, userForm)
      .subscribe(() =>{
        this.router.navigate(['/']);
      });
    } else {
      this.userService.create(userForm)
      .subscribe(() =>{
        this.router.navigate(['/']);
      });
    }

    
    
  }

}
