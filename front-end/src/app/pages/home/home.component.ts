import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSignInAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faSignInAlt = faSignInAlt;
  faCheck = faCheck;

  constructor (
    private router: Router
  ) {}

  goAuth () {
    this.router.navigate(['/auth']);
  }
}
