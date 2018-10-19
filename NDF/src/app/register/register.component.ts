import { Component, OnInit } from '@angular/core';
import { AuthentificationService, TokenPayload } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: '',
    accountType : '',
    accountManager: '',
    accountManagerName: ''
  };

  constructor(private auth: AuthentificationService, private router: Router) {}

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/list');
    }, (err) => {
      console.error(err);
    });
  }

  ngOnInit() {
  }

}
