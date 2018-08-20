import { Component } from '@angular/core';
import { faHome, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'component-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  faHome = faHome;
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;

  constructor (
    private router: Router
  ) {}

  goHome () {
    this.router.navigate(['/']);
  }
}
