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
      onClick: () => this.goAuth(),
      isInverted: true
    }
  ];
  faCheck = faCheck;
  faSignInAlt = faSignInAlt;

  constructor (
    private router: Router
  ) {}

  goAuth () {
    this.router.navigate(['/auth']);
  }
}
