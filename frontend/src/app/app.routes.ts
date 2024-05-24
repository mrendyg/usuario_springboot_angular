import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path: '',
        loadComponent: () => import('./user-login/user-login.component')
    },

    //paths de usuarios
    
    {
        path: 'users/list',
        loadComponent: () => import('./user-list/user-list.component')   
    },
    {
        path: 'users/form',
        loadComponent: () => import('./user-form/user-form.component')
    },
    { //para editar un usuario
        path: 'users/:id/edit',
        loadComponent: () => import('./user-form/user-form.component')
    },

];
