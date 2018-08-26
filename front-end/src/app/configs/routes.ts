import { Routes } from '@angular/router';
import { HomeComponent } from "../pages/home/home.component";
import { AuthComponent } from '../pages/auth/auth.component';
import { PanelComponent } from '../pages/panel/panel.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'panel',
    component: PanelComponent
  }
];
