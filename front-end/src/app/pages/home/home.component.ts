import { Component } from '@angular/core';
import { faHome, faSignInAlt, faUserPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faHome = faHome;
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;
  faCheck = faCheck;
}
