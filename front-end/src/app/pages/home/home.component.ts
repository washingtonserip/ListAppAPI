import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSignInAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../../interfaces/menu.interface';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menu: Menu[] = [
    {
      text: 'Sign in or Sign up',
      icon: faSignInAlt,
      onClick: () => this.router.navigate(['/auth']),
      isInverted: true
    }
  ];
  faCheck = faCheck;

  constructor (
    private router: Router
  ) {}
}
