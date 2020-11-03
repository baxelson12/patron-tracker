import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  constructor(private as: AuthService, private tss: TokenStorageService, private router: Router) { }

  onSubmit() {
    this.as.login(this.loginForm.value).subscribe((val) => {
      this.tss.saveToken(val.token)
      this.redirect();
    });
    this.loginForm.reset();
  }

  redirect() {
    this.router.navigate(['employee'])
  }
}
