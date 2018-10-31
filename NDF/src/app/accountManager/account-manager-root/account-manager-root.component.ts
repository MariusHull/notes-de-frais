import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/authentification.service';

@Component({
  selector: 'app-account-manager-root',
  templateUrl: './account-manager-root.component.html',
  styleUrls: ['./account-manager-root.component.css']
})
export class AccountManagerRootComponent implements OnInit {

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
  }

}
