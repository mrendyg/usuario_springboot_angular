import { Routes } from '@angular/router';
import path from 'node:path';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () => import('./user-list/user-list.component')
    }
];
