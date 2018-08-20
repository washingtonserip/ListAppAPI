import { Routes } from '@angular/router';
import { HomeComponent } from "../pages/home/home.component";
import { AuthComponent } from '../pages/auth/auth.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  }
];
