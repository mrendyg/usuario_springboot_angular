import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./user-list/user-list.component')
    },
    {
        path: 'form',
        loadComponent: () => import('./user-form/user-form.component')
    },
    { //para editar un usuario
        path: ':id/edit',
        loadComponent: () => import('./user-form/user-form.component')
    },
];
