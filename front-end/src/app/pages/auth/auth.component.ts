import { Component } from '@angular/core';
import { faHome, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Menu } from '../../interfaces/menu.interface';

@Component({
  selector: 'component-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  menu: Menu[] = [
    {
      text: 'Back',
      icon: faHome,
      onClick: () => this.router.navigate(['/']),
      isInverted: true
    }
  ];
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;

  constructor (
    private router: Router
  ) {}
}
