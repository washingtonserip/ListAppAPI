import { Component } from '@angular/core';
import { faHome, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Menu } from '../../interfaces/menu.interface';
import { UserService } from '../../services/user/user.service';

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
  public error;
  public success;
  public emailError;
  public passwordError;
  public email = '';
  public password = '';
  public faSignInAlt = faSignInAlt;
  public faUserPlus = faUserPlus;

  constructor (
    private router: Router,
    private userService: UserService
  ) {}

  validateEmail (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateForm (callback) {
    const user = {
      email: this.email,
      password: this.password,
    };
    let errorCount = 0;

    this.emailError = '';
    this.passwordError = '';

    if (!this.email) {
      this.emailError = 'Can\'t be blank';
      errorCount++;
    } else if (!this.validateEmail(this.email)) {
      this.emailError = 'Email is invalid';
      this.email = '';
      errorCount++;
    }

    if (!this.password) {
      this.passwordError = 'Can\'t be blank';
      errorCount++;
    } else if (this.password.length < 6) {
      this.passwordError = 'Password is too short (minimum is 6 characters)';
      this.password = '';
      errorCount++;
    }

    this.success = '';
    this.error = '';

    if (errorCount === 0) {
      this.email = '';
      this.password = '';
      return callback(user);
    }
  }

  signUp (user) {
    this.userService.create(user)
      .subscribe(
        () => { this.success = 'Account created successfully. Please login.'; },
        response => {
          const { error } = response;
          if (error && error.message) {
            this.error = error.message;
          } else {
            this.error = 'An error has occurred. Try again.';
          }
        }
      );
  }

  signIn (user) {
    this.userService.login(user)
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/panel']);
        },
        () => { this.error = 'An error has occurred. Try again.'; }
      );
  }
}
