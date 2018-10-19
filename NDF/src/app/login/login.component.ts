import { Component, OnInit } from '@angular/core';
import { AuthentificationService, TokenPayload } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    email: '',
    password: '',
    accountType: '',
    accountManager: '',
    accountManagerName: '',
  };

  constructor(private auth: AuthentificationService, private router: Router) { }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    }); 
  }

  ngOnInit() {
  }

}
